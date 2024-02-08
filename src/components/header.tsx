import { Navigation } from "./navigation";

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Профиль", href: "/profile" },
];

const TheHeader = () => {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  );
};

export { TheHeader };
