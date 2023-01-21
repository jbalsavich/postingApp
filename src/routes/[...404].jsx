import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import Contact from "~/components/Contact";
export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      
        <Contact body="If this seems to be an error, or you have a suggestion for this page. Please Contact me at "/>
      <p>
        This website was built using <a href="https://start.solidjs.com/getting-started/what-is-solidstart">SolidStart</a> (in case you were wondering).

      </p>
    </main>
  );
}
