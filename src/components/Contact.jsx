//make a basic contact component

// src/components/Contact.jsx

import { Title } from "solid-start";

export default function Contact(props) {
    const body = props.body || "If you have any questions, please ";
    const needsTitle = props.needsTitle || false;
    return (
        <div>
        <Show when={needsTitle}>
            <Title>Contact</Title>
            <h1>Contact</h1>
        </Show>
        
        <p>
            {body} <a href="mailto:contact@balsavich.dev

">contact@balsavich.dev</a>.
        </p>
        </div>
    );
}
