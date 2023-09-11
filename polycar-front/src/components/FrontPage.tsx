import { Link } from "react-router-dom";
import "../styles/frontpage.scss";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function HomePage() {
  return (
    <div className="HomePage">
      <Parallax pages={4}>
        <div className="HomePageTitle">
          <ParallaxLayer offset={0} speed={0.5}>
            <h1>Polycars</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={0.01}>
            {" "}
            {/* j'ai mis une vitesse lente pour que l'appel a l'action soit plus visible */}
            <h2>Find your next car. Now</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={0.72} speed={0.07}>
            <Link to="/cars" className="HomePageButton">
              Car Library
            </Link>
            <Link to="/quizz" className="HomePageButton">
              Car finder
            </Link>
          </ParallaxLayer>
          <ParallaxLayer offset={0.83} speed={0.25}>
            <div className="infosAboutPolycars">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              quis elit elementum, aliquet justo id, suscipit erat. In volutpat,
              sem quis accumsan egestas, dolor lorem dapibus sem, at lacinia
              metus quam non diam. Nam accumsan auctor pretium. Ut pharetra odio
              sed libero pulvinar semper ut sed nisl. Donec elementum ante
              ultricies mattis convallis. Suspendisse potenti. Aliquam iaculis
              aliquet arcu, sed ultrices arcu pretium finibus. Vestibulum
              imperdiet, magna quis dignissim commodo, nisi ipsum dapibus mi,
              vel accumsan nisi nulla vitae nunc. Curabitur at sodales augue,
              vel congue purus. Vestibulum tempor ac arcu et venenatis. Nam
              vitae sapien eu diam vehicula scelerisque eu hendrerit tellus. In
              rhoncus erat non nisi eleifend tempor. In vestibulum sit amet
              velit vehicula mattis. Praesent fringilla, massa nec convallis
              dictum, ante nibh sagittis odio, porttitor eleifend ipsum tellus a
              mi. In sit amet consequat ante. Nulla vel dui vitae enim facilisis
              sagittis nec at ante. Nulla facilisi. Aenean congue odio varius
              lorem pretium, et egestas neque porta. Pellentesque sed tortor
              turpis. In sit amet mollis dolor. Suspendisse mi augue,
              pellentesque vitae justo eget, sagittis dapibus ante. In venenatis
              sapien sed tortor pulvinar, porta tempus purus commodo. Praesent
              at magna ultricies quam sagittis tristique. Morbi at elit
              vulputate, tempor nunc sed, laoreet felis. Donec et pellentesque
              sapien, et pellentesque enim. Donec sed tortor vel lacus pretium
              commodo. Phasellus in sapien ac ante varius congue. Integer leo
              lectus, consequat sit amet enim in, sagittis bibendum eros. Sed
              tincidunt posuere quam. Ut sed mauris nisl. Sed euismod est velit.
              Fusce volutpat, lorem sed pharetra ultricies, mi mi malesuada
              metus, vitae tincidunt nibh nisl a ligula. Integer aliquam auctor
              lacus a ullamcorper. Curabitur commodo neque ut dolor luctus
              molestie. Curabitur fringilla velit tincidunt nibh suscipit
              egestas. Vivamus id rhoncus arcu. Vivamus pretium lectus erat,
              eget hendrerit nulla sagittis tempor. Fusce congue blandit
              vehicula. Nam vitae vulputate sapien, quis sollicitudin ligula.
              Donec ut tortor vel mi auctor imperdiet et eu quam. Suspendisse
              porttitor ullamcorper lectus, sollicitudin tristique turpis
              rhoncus eget. Cras sit amet mi ut eros aliquet posuere. Praesent
              vel purus nunc. Ut tincidunt posuere ex, vel interdum erat pretium
              interdum. Aliquam suscipit id metus hendrerit pulvinar. Integer
              ultricies eros aliquam augue tristique, in tempor turpis tempus.
              Nunc et tincidunt turpis, vel consequat est. Etiam posuere ipsum
              augue, vel laoreet ligula elementum ac. Praesent porta enim eu
              blandit tristique.
            </div>
          </ParallaxLayer>
        </div>
      </Parallax>
    </div>
  );
}

export default HomePage;
