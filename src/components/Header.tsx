import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="py-8 px-4 text-center">
      <div className="flex justify-center">
        <Logo />
      </div>
    </header>
  );
}
