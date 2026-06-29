// import Image from "next/image";
// import Link from "next/link";
// import LoginForm from "./_components/Form";

// export default function page() {
//   return (
//     <main className="flex min-h-screen md:flex-row flex-col">
//       <div className="flex-1">
//         <LoginForm />
//       </div>
//       <div className="flex-1 bg-foreground">
//         <Link href="/" className="flex items-center justify-end m-4">
//           <Image
//             src={"/images/logo.jpeg"}
//             alt="logo"
//             width={44}
//             height={44}
//             className="rounded-full"
//             priority
//           />
//         </Link>
//         <div className="h-screen element-center flex-col select-none">
//           <h1 className="text-4xl font-bold text-primary">لوحة التحكم</h1>
//           <p className="text-muted-foreground">مرحبا بعودتك </p>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import LoginForm from "./_components/Form";
import { motion } from "motion/react";

export default function Page() {
  return (
    <main className="min-h-screen grid md:grid-cols-2 grid-cols-1">
      <div
        className="
          flex flex-col
          px-6 py-6
          bg-foreground
          border-t md:border-t-0 md:border-l border-border
        "
      >
        <div className="flex justify-end">
          <Link href="/">
            <Image
              src="/images/logo.jpeg"
              alt="logo"
              width={44}
              height={44}
              className="rounded-full"
              priority
            />
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3 flex justify-center flex-col items-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-green-500">
            لوحة التحكم
          </h1>

          <p className="text-muted-foreground text-sm md:text-base">
            مرحبًا بعودتك 👋
          </p>
        </motion.div>
      </div>
      <div className="flex items-center justify-center px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            w-full max-w-md
          "
        >
          <LoginForm />
        </motion.div>
      </div>
    </main>
  );
}
