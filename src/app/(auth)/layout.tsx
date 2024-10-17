import Image from "next/image"
interface AuthLayoutProps {
  children: React.ReactNode
} ;

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <Image
        src="/logo.svg"
        height={100}
        width={200}
        alt="logo"
        />
      {children}
    </div>
  )
}

export default AuthLayout