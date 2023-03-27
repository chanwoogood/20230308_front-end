// Gallery.jsx에 작성된 Gallery 컴포넌트를 import
import Gallery from "./Gallery";
import { Profile } from "./Gallery"; // named export.

export default function App() {
  return (
    <div>
      <Gallery />
      <Gallery />
    </div>
  );
}
