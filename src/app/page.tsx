import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export default function Home() {
  return (
    <section>
      <div className="flex justify-center items-center mb-5">
        <img src="https://avatars.githubusercontent.com/u/7030531" className="rounded-full" width="150" alt="Panagiotis Englezos"></img>
      </div>
      <h1 className="mb-7 text-4xl font-semibold tracking-tighter text-center">Panagiotis Englezos</h1>
      <div className="text-3xl mb-5 flex space-x-3 justify-center">
        <a href="mailto:panagiotisegl@gmail.com" target="_blank"><MdAlternateEmail /></a>
        <a href="https://github.com/penglezos" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/penglezos" target="_blank"><FaLinkedin /></a>
        <a href="https://paypal.me/penglezosgr" target="_blank"><FaPaypal /></a>
        <a href="https://t.me/penglezos" target="_blank"><FaTelegram /></a>
      </div>
    </section>
  );
}
