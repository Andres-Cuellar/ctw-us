import type { Locale } from "@/shared/config/site";

import * as esGlobal from "./es/global";
import * as esHome from "./es/home";
import * as esServicios from "./es/servicios";
import * as esContacto from "./es/contacto";
import * as esNosotros from "./es/nosotros";
import * as esDetailing from "./es/detailing";
import * as esSalonSpa from "./es/salon-spa";

import * as enGlobal from "./en/global";
import * as enHome from "./en/home";
import * as enServicios from "./en/servicios";
import * as enContacto from "./en/contacto";
import * as enNosotros from "./en/nosotros";
import * as enDetailing from "./en/detailing";
import * as enSalonSpa from "./en/salon-spa";

export function getGlobalContent(locale: Locale = "es") {
  return locale === "en" ? enGlobal.globalContent : esGlobal.globalContent;
}

export function getHomeContent(locale: Locale = "es") {
  return locale === "en" ? enHome : esHome;
}

export function getServiciosContent(locale: Locale = "es") {
  return locale === "en" ? enServicios : esServicios;
}

export function getContactoContent(locale: Locale = "es") {
  return locale === "en" ? enContacto : esContacto;
}

export function getNosotrosContent(locale: Locale = "es") {
  return locale === "en" ? enNosotros : esNosotros;
}

export function getDetailingContent(locale: Locale = "es") {
  return locale === "en" ? enDetailing : esDetailing;
}

export function getSalonSpaContent(locale: Locale = "es") {
  return locale === "en" ? enSalonSpa : esSalonSpa;
}
