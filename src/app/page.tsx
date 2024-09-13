import SigninForm from "@/components/signin-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row h-screen">
      <div className="lg:w-1/2 bg-customBlue flex justify-center items-center lg:p-20">
        <div className="text-white text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            Access your account to stay on top of your financial data.
          </h2>
          <p className="text-sm lg:text-lg mb-8">
            Ensure accuracy and efficiency in every transaction with our secure
            reconciliation tools.
          </p>
          <div className="w-full flex justify-center">
            <Image
              src="/images/dashboard.jpeg"
              alt="Dashboard illustration"
              className="w-4/5"
              width={200}
              height={300}
            />
          </div>
        </div>
      </div>

      <SigninForm />
    </main>
  );
}
