"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { DOMAIN } from "@/app/page";
import { user } from "@/types/types";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";
import { z } from "zod";
import { toast } from "react-toastify";

const socket = io(DOMAIN, {
  withCredentials: true,
});

const registSchema = z.object({
  name: z.string().min(1, "you need to wite the name"),
  lastname: z.string().min(1, "you need to wite the lastname"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Home() {
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const nameRef = useRef(null);
  const lastnameRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [totalAges, setTotalAges] = useState(0);
  const [counter, setCounter] = useState(0);
  const [trues, setTrues] = useState(false);

  const changeTruse = () => {
    setTrues(!trues);
  };

  useEffect(() => {
    let time: number;
    if (counter < totalAges) {
      time = setTimeout(() => {
        setCounter(counter + 1);
      }, 10);
    }
    return () => clearTimeout(time);
  }, [counter]);

  useEffect(() => {
    // عند الاتصال بالسيرفر أول مرة
    socket.on("connect", () => {
      console.log("🟢 Socket connected:", socket.id);
    });

    // استماع لحدث تحديث المستخدمين من السيرفر
    socket.on("update_users", () => {
      fetchUsers();
    });

    return () => {
      socket.disconnect(); // تنظيف الاتصال عند الخروج من الصفحة
    };
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${DOMAIN}/user/getall`, {
        withCredentials: true,
      });

      setUsers(res.data);

      const userSums = res.data;

      setTotalAges(
        userSums.reduce((sum: number, user: user) => {
          return sum + (user.age || 0);
        }, 0)
      );
      setCounter((prev) => prev + 1);
      console.log("hello" + res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const registUser = async (e) => {
    e.preventDefault(); // ← يصحح السلوك الطبيعي للفورم (منع إعادة تحميل الصفحة)

    if (!nameRef.current.value || nameRef.current.value.length < 6) {
      nameRef.current.focus();
      return toast.error("You must write your name (at least 6 characters)");
    }

    if (!lastnameRef.current.value || lastnameRef.current.value.length < 6) {
      lastnameRef.current.focus();
      return toast.error(
        "You must write your lastname (at least 6 characters)"
      );
    }

    if (!emailRef.current.value) {
      emailRef.current.focus();
      return toast.error("You must write your email");
    }

    if (!passwordRef.current.value || passwordRef.current.value.length < 6) {
      passwordRef.current.focus();
      return toast.error("Password must be at least 6 characters");
    }

    try {
      const res = await axios.post(`${DOMAIN}/user/reg`, {
        name: nameRef.current.value,
        lastname: lastnameRef.current.value,
        age: ageRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      socket.emit("new_user_added", res.data);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message); // الرسالة من الباك اند
      } else {
        toast.error("Something went wrong"); // fallback عام
      }
    }
  };
  return (
    <div>
      <div className="flex p-5 font-bold select-none bg-cyan-700 shadow-2xl  ">
        <div>
          <strong className=" text-white">The number is :{totalAges} </strong>
          <br />
          <strong className="">Counter:{counter}</strong>
          <br />
          <button
            onClick={changeTruse}
            className=" hover:bg-amber-500 p-2 bg-amber-300 rounded-2xl"
          ></button>
          <div>{trues ? "O" : "X"}</div>
        </div>
      </div>
      <div className="bg-cyan-100 md:flex">
        <div className=" md:w-2/4 bg-cyan-100 md:max-h-screen md:overflow-y-auto">
          <div className="p-3">
            {users.map((user: user) => (
              <div key={user._id}>
                <div className=" select-none  shadow-2xl font-bold rounded-2xl bg-gray-100 mb-2 p-5 text-gray-600">
                  {user._id}
                  <br />
                  {user.name}
                  <br />
                  {user.lastname}
                  <br />
                  {user.age}
                  <br />
                  {user.email}
                </div>
              </div> // ← استخدمنا return وبيانات حقيقية
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center min-h-screen  md:w-2/4 bg-cyan-100">
          <div className="w-full max-w-md bg-gray-100 p-6 rounded-xl shadow-lg">
            <form onSubmit={registUser} className="space-y-4">
              <div>
                <input
                  type="text"
                  ref={nameRef}
                  placeholder="User name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  ref={lastnameRef}
                  placeholder="Last name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <input
                  type="number"
                  ref={ageRef}
                  placeholder="User age"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  ref={emailRef}
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  ref={passwordRef}
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
