import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <body className="body">
      <div className="scroll-watcher"></div>
      <div className="headerimg">
        <div className="head">
          Hey Guys Welcome to Animation World 😊
        </div>
        <h3>Maker :-) YASH_JADHAV</h3>
      </div>
      <div className="view">
        <div className="block block1"></div>
        <div className="block block2"></div>
        <div className="block block3"></div>
        <div className="block block4"></div>
        <div className="block block5"></div>
        <div className="block block6"></div>
      </div>

    </body>
  );
}
