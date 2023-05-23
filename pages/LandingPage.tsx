"use client";
import React from "react";
import styled from "styled-components";
import { HeartIcon } from "@heroicons/react/20/solid";

const LandingPageContainer = styled.div`
  background-color: var(--primary);
  color: var(--secondary);
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: var(--primary-dark);
  margin-bottom: 16px;
`;

const Subheading = styled.p`
  font-size: 18px;
  color: var(--secondary-dark);
  margin-bottom: 24px;
`;

const Button = styled.button`
  background-color: var(--secondary);
  color: var(--primary);
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-dark);
  }
`;

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <Heading>Welcome to our Product!</Heading>
      <Subheading>A brief description of your product.</Subheading>
      <Button>Get Started</Button>
      <HeartIcon name="arrow-right" className="w-8" />
    </LandingPageContainer>
  );
}
