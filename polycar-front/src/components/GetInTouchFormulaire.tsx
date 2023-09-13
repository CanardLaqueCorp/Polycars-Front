//we import the css
import "../styles/GetInTouchFormulaire.scss";

function GetInTouchFormulaire() {
  return (
    <div className="GetInTouchFormulaire">
      <h1 className="bddInfosH1">Get In Touch with Us! 📧</h1>
      <div className="infosAboutBdd">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default GetInTouchFormulaire;
