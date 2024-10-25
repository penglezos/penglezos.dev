import { FaGithub, FaLinkedin, FaPaypal, FaTelegram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Home() {
  return (
    <section>
      <div className="flex justify-center items-center mb-5">
        <img src="https://avatars.githubusercontent.com/u/7030531" className="rounded-full" width="150" alt="Panagiotis Englezos"></img>
      </div>
      <h1 className="mb-5 text-4xl font-bold tracking-tighter text-center">Panagiotis Englezos</h1>
      <p className="mb-5 tracking-tighter text-center">Full-stack & Android developer</p>
      <div className="mb-10 flex space-x-4 justify-center">
        <a href="mailto:panagiotisegl@gmail.com" target="_blank"><MdAlternateEmail size={35} /></a>
        <a href="https://github.com/penglezos" target="_blank"><FaGithub size={35} /></a>
        <a href="https://linkedin.com/in/penglezos" target="_blank"><FaLinkedin size={35} /></a>
        <a href="https://paypal.me/penglezosgr" target="_blank"><FaPaypal size={35} /></a>
        <a href="https://t.me/penglezos" target="_blank"><FaTelegram size={35} /></a>
      </div>
    </section>
  );
}
