import Navbar from "@/components/utils/Navbar";

/**
 * The navbar lives in the template (not the layout) so it re-mounts on every navigation.
 * It is a JS-free server component whose mobile menu is a checkbox: re-mounting resets it,
 * which closes the open panel after a link is followed.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
