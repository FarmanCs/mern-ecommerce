"use client";
import { useSession } from "next-auth/react";
// import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function profilePage() {
  const session = useSession();
  const { status } = session;
  const [userName, setUserName] = useState(session?.data?.user?.name || " ");
  const [streetAdress, setStreetAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  async function handleProfileUpdate(e) {
    e.preventDefault();
    const savingPromis = new Promise(async (resolve, redirect) => {
      const update = await fetch("/api/profile", {
        method: "PUT",
        body: JSON.stringify({
          name: userName,
          streetAdress,
          postalCode,
          city,
          phone,
          country,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (update.ok) {
        resolve();
      } else {
        redirect();
      }
    });

    await toast.promise(savingPromis, {
      loading: "Saving...",
      success: "Saved!",
      error: "Error",
    });
  }

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session?.data?.user?.name);
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          console.log(data);
          setCity(data.city);
          setPhone(data.phone);
          setCountry(data.country);
          setPostalCode(data.postalCode);
          setStreetAdress(data.streetAdress);
        });
      });
    }
  }, [status, session]);

  async function handleFileChange(e) {
    // console.log(e);
    const files = e.target.files;
    if (files.length > 0) {
      const data = new FormData();
      data.set("file", files[0]);
      await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
    }
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }
  const userImage = session?.data?.user?.image;
  return (
    <section className="mt-9">
      <h1 className="text-center text-2xl font-semibold text-red-800 mb-4">
        ProfilePage
      </h1>

      <div className="max-w-md mx-auto ">
        <div className="flex gap-2">
          <div>
            <div className="p-2 rounded-lg relative">
              <Image
                src={userImage}
                width={120}
                height={200}
                alt="avatar"
                className="rounded-lg w-full h-full mb-1"
              />
              <label>
                <input
                  type="file"
                  className="hidden "
                  onChange={handleFileChange}
                />
                <span className="block border border-gray-500 rounded-lg text-center p-2 cursor-pointer">
                  Edit
                </span>
              </label>
            </div>
          </div>

          {/* form stat form here */}
          <form className="grow" onSubmit={handleProfileUpdate}>
            <input
              type="text"
              placeholder="name"
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
            />
            <input
              type="email"
              e
              name="email"
              value={session?.data?.user.email}
              disabled={true}
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Street address"
              value={streetAdress}
              onChange={(e) => setStreetAdress(e.target.value)}
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="postal code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default profilePage;
