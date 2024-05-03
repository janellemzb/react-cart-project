import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import "../styles.css";

export default function Header() {
  return (
    <header className="header">
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem key="home">
          <BreadcrumbLink as={Link} to="/" fontWeight={700}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem key="address">
          <BreadcrumbLink as={Link} to="/address" fontWeight={700}>
            Address
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem key="cart">
          <BreadcrumbLink as={Link} to="/cart" fontWeight={700}>
            Cart
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem key="user" isCurrentPage>
          <BreadcrumbLink as={Link} to="/user" fontWeight={700}>
            Account
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="banner">
        <img
          src="https://i.postimg.cc/3x3YLcFp/ramen77.png"
          alt="Ramen 77 Banner"
        />
      </div>
    </header>
  );
}
