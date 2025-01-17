import React from "react";
import Link from "@components/Link";
import Heading from "@components/Blog/H";
import Checklist from "@components/Blog/Checklist";
import Image from "@components/Blog/Image";
import Syntax from "@components/Blog/Syntax";

interface ChildrenProps {
  children: React.ReactNode;
}

const MDXComponents = {
  Link,
  Image,
  Checklist,
  Syntax,
  code: Syntax,
  H: Heading,
  h1: ({ children }: ChildrenProps) => (
    <Heading level={1} text={children as string} />
  ),
  h2: ({ children }: ChildrenProps) => (
    <Heading level={2} text={children as string} />
  ),
  h3: ({ children }: ChildrenProps) => (
    <Heading level={3} text={children as string} />
  ),
  h4: ({ children }: ChildrenProps) => (
    <Heading level={4} text={children as string} />
  ),
  h5: ({ children }: ChildrenProps) => (
    <Heading level={5} text={children as string} />
  ),
  h6: ({ children }: ChildrenProps) => (
    <Heading level={6} text={children as string} />
  ),
};

export default MDXComponents;
