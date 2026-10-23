import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHero from "../components/page-hero";
import iconEcosistema from "../components/page-hero/assets/ecosistema.svg";
import "./ecosistema.scss";

import abrelatam from "../components/work-with-section/assets/ecosistema/abrelatam.png";
import acij from "../components/work-with-section/assets/ecosistema/acij.png";
import amartya from "../components/work-with-section/assets/ecosistema/amartya.png";
import art41 from "../components/work-with-section/assets/ecosistema/art41.png";
import artemisas from "../components/work-with-section/assets/ecosistema/artemisas.png";
import avina from "../components/work-with-section/assets/ecosistema/avina.png";
import bid from "../components/work-with-section/assets/ecosistema/bid.png";
import caf from "../components/work-with-section/assets/ecosistema/caf.png";
import camaraDiputadosArgentina from "../components/work-with-section/assets/ecosistema/camaraDiputadosArgentina.png";
import cels from "../components/work-with-section/assets/ecosistema/cels.png";
import centreForPublicImpact from "../components/work-with-section/assets/ecosistema/centreForPublicImpact.png";
import cippec from "../components/work-with-section/assets/ecosistema/cippec.png";
import civicus from "../components/work-with-section/assets/ecosistema/civicus.png";
import conocimientoAbierto from "../components/work-with-section/assets/ecosistema/conocimientoAbierto.png";
import conscienteColectivo from "../components/work-with-section/assets/ecosistema/conscienteColectivo.png";
import dHub from "../components/work-with-section/assets/ecosistema/dHub.png";
import deliberaBrasil from "../components/work-with-section/assets/ecosistema/deliberaBrasil.png";
import democracyRD from "../components/work-with-section/assets/ecosistema/democracyRD.png";
import demoreset from "../components/work-with-section/assets/ecosistema/demoreset.svg";
import derechosDigitales from "../components/work-with-section/assets/ecosistema/derechosDigitales.png";
import digitalDefenders from "../components/work-with-section/assets/ecosistema/digitalDefenders.png";
import digitalOcean from "../components/work-with-section/assets/ecosistema/digitalOcean.png";
import directorioLegislativo from "../components/work-with-section/assets/ecosistema/directorioLegislativo.png";
import ecuador from "../components/work-with-section/assets/ecosistema/ecuador.png";
import embajadaDeAustralia from "../components/work-with-section/assets/ecosistema/embajadaDeAustralia.png";
import embajadaDeCanada from "../components/work-with-section/assets/ecosistema/embajadaDeCanada.png";
import embajadaDeNuevaZelanda from "../components/work-with-section/assets/ecosistema/embajadaDeNuevaZelanda.png";
import extituto from "../components/work-with-section/assets/ecosistema/extituto.png";
import fhhcFundacionFernandoHenriqueCardodo from "../components/work-with-section/assets/ecosistema/fhhcFundacionFernandoHenriqueCardodo.png";
import fiboImpactoSocial from "../components/work-with-section/assets/ecosistema/fiboImpactoSocial.png";
import fimaChile from "../components/work-with-section/assets/ecosistema/fimaChile.png";
import fopea from "../components/work-with-section/assets/ecosistema/fopea.png";
import fundacionHeinrichBoll from "../components/work-with-section/assets/ecosistema/fundacionHeinrichBoll.png";
import fundacionHuesped from "../components/work-with-section/assets/ecosistema/fundacionHuesped.png";
import fundacionPhilosophia from "../components/work-with-section/assets/ecosistema/fundacionPhilosophia.png";
import fundeps from "../components/work-with-section/assets/ecosistema/fundeps.png";
import gcba from "../components/work-with-section/assets/ecosistema/gcba.png";
import generalPueyrredon from "../components/work-with-section/assets/ecosistema/generalPueyrredon.png";
import godoyCruz from "../components/work-with-section/assets/ecosistema/godoyCruz.png";
import google from "../components/work-with-section/assets/ecosistema/google.png";
import ideemos from "../components/work-with-section/assets/ecosistema/ideemos.png";
import ifa from "../components/work-with-section/assets/ecosistema/ifa.png";
import ildaIniciativaLationoamericanaParaLosDatosAbiertos from "../components/work-with-section/assets/ecosistema/ildaIniciativaLationoamericanaParaLosDatosAbiertos.png";
import inecip from "../components/work-with-section/assets/ecosistema/inecip.png";
import institutoDelSurUrbanoMexico from "../components/work-with-section/assets/ecosistema/institutoDelSurUrbanoMexico.png";
import kas from "../components/work-with-section/assets/ecosistema/kas.svg";
import laCosta from "../components/work-with-section/assets/ecosistema/laCosta.png";
import laboratorioDePoliticasPublicasDeLaUba from "../components/work-with-section/assets/ecosistema/laboratorioDePoliticasPublicasDeLaUba.png";
import latamLab from "../components/work-with-section/assets/ecosistema/latamLab.svg";
import luminate from "../components/work-with-section/assets/ecosistema/luminate.png";
import maipu from "../components/work-with-section/assets/ecosistema/maipu.png";
import marChiquita from "../components/work-with-section/assets/ecosistema/marChiquita.png";
import microsoft from "../components/work-with-section/assets/ecosistema/microsoft.png";
import minu from "../components/work-with-section/assets/ecosistema/minu.png";
import movilizatorio from "../components/work-with-section/assets/ecosistema/movilizatorio.png";
import naturalezaEnDerechos from "../components/work-with-section/assets/ecosistema/naturalezaEnDerechos.png";
import newVentureFund from "../components/work-with-section/assets/ecosistema/newVentureFund.png";
import nuestraCordoba from "../components/work-with-section/assets/ecosistema/nuestraCordoba.png";
import nuestraMendoza from "../components/work-with-section/assets/ecosistema/nuestraMendoza.png";
import odia from "../components/work-with-section/assets/ecosistema/odia.png";
import openGovernmentPartnership from "../components/work-with-section/assets/ecosistema/openGovernmentPartnership.png";
import openSocietyFoundation from "../components/work-with-section/assets/ecosistema/openSocietyFoundation.png";
import peoplePowered from "../components/work-with-section/assets/ecosistema/peoplePowered.png";
import perfit from "../components/work-with-section/assets/ecosistema/perfit.png";
import poderCiudadano from "../components/work-with-section/assets/ecosistema/poderCiudadano.png";
import provinciaDeBuenosAires from "../components/work-with-section/assets/ecosistema/provinciaDeBuenosAires.png";
import quintaEsencia from "../components/work-with-section/assets/ecosistema/quintaEsencia.png";
import reflejar from "../components/work-with-section/assets/ecosistema/reflejar.png";
import rinp from "../components/work-with-section/assets/ecosistema/rinp.png";
import rosario from "../components/work-with-section/assets/ecosistema/rosario.png";
import sanLorenzo from "../components/work-with-section/assets/ecosistema/sanLorenzo.png";
import sanMiguelDeTucuman from "../components/work-with-section/assets/ecosistema/sanMiguelDeTucuman.png";
import slack from "../components/work-with-section/assets/ecosistema/slack.png";
import sunchales from "../components/work-with-section/assets/ecosistema/sunchales.png";
import surFuturo from "../components/work-with-section/assets/ecosistema/surFuturo.png";
import sustentabilidadSinFronteras from "../components/work-with-section/assets/ecosistema/sustentabilidadSinFronteras.png";
import thomsonReuters from "../components/work-with-section/assets/ecosistema/thomsonReuters.png";
import thomsonReutersFoundation from "../components/work-with-section/assets/ecosistema/thomsonReutersFoundation.png";
import ue from "../components/work-with-section/assets/ecosistema/ue.png";
import undef from "../components/work-with-section/assets/ecosistema/undef.png";
import universidadNacionalDeMarDelPlata from "../components/work-with-section/assets/ecosistema/universidadNacionalDeMarDelPlata.png";
import universidadNacionalDelRosario from "../components/work-with-section/assets/ecosistema/universidadNacionalDelRosario.png";
import urbanismoVivo from "../components/work-with-section/assets/ecosistema/urbanismoVivo.png";
import viaLibre from "../components/work-with-section/assets/ecosistema/viaLibre.png";
import vicenteLopez from "../components/work-with-section/assets/ecosistema/vicenteLopez.png";
import virtuagora from "../components/work-with-section/assets/ecosistema/virtuagora.png";
import xr from "../components/work-with-section/assets/ecosistema/xr.png";

const SOCIEDAD_CIVIL = {
  titleKey: "pages.ecosistema_sector_civil",
  logos: [
    { name: "ACIJ", src: acij },
    { name: "Amartya", src: amartya },
    { name: "ART 41", src: art41 },
    { name: "Artemisas", src: artemisas },
    { name: "CELS", src: cels },
    { name: "CIPPEC", src: cippec },
    { name: "Civicus", src: civicus },
    { name: "Conocimiento Abierto", src: conocimientoAbierto },
    { name: "Consciente Colectivo", src: conscienteColectivo },
    { name: "D-HUB", src: dHub },
    { name: "Delibera Brasil", src: deliberaBrasil },
    { name: "Directorio Legislativo", src: directorioLegislativo },
    { name: "Extituto", src: extituto },
    { name: "Fibo Impacto Social", src: fiboImpactoSocial },
    { name: "FIMA (Chile)", src: fimaChile },
    { name: "FOPEA", src: fopea },
    { name: "Fundación Heinrich Böll", src: fundacionHeinrichBoll },
    { name: "Fundación Huésped", src: fundacionHuesped },
    { name: "Fundación Philosophia", src: fundacionPhilosophia },
    { name: "Fundeps", src: fundeps },
    { name: "iDeemos", src: ideemos },
    { name: "ILDA", src: ildaIniciativaLationoamericanaParaLosDatosAbiertos },
    { name: "INECIP", src: inecip },
    { name: "Instituto del Sur Urbano (México)", src: institutoDelSurUrbanoMexico },
    { name: "Latam Lab", src: latamLab },
    { name: "MINU", src: minu },
    { name: "Movilizatorio", src: movilizatorio },
    { name: "Naturaleza en Derechos", src: naturalezaEnDerechos },
    { name: "New Venture Fund", src: newVentureFund },
    { name: "Nuestra Córdoba", src: nuestraCordoba },
    { name: "Nuestra Mendoza", src: nuestraMendoza },
    { name: "ODIA", src: odia },
    { name: "Poder Ciudadano", src: poderCiudadano },
    { name: "Quinta Esencia", src: quintaEsencia },
    { name: "Reflejar", src: reflejar },
    { name: "Sur Futuro", src: surFuturo },
    { name: "Sustentabilidad Sin Fronteras", src: sustentabilidadSinFronteras },
    { name: "Thomson Reuters Foundation", src: thomsonReutersFoundation },
    { name: "Urbanismo Vivo", src: urbanismoVivo },
    { name: "Vía Libre", src: viaLibre },
    { name: "Virtuágora", src: virtuagora },
    { name: "XR", src: xr },
    { name: "Laboratorio de Políticas Públicas (UBA)", src: laboratorioDePoliticasPublicasDeLaUba },
  ],
};

const FINANCIADORES = {
  titleKey: "pages.ecosistema_sector_funders",
  logos: [
    { name: "AVINA", src: avina },
    { name: "BID", src: bid },
    { name: "CAF", src: caf },
    { name: "Derechos Digitales", src: derechosDigitales },
    { name: "Digital Defenders", src: digitalDefenders },
    { name: "Digital Ocean", src: digitalOcean },
    { name: "Embajada de Australia", src: embajadaDeAustralia },
    { name: "Embajada de Canada", src: embajadaDeCanada },
    { name: "Embajada de Nueva Zelanda", src: embajadaDeNuevaZelanda },
    { name: "FHHC", src: fhhcFundacionFernandoHenriqueCardodo },
    { name: "Google", src: google },
    { name: "IFA", src: ifa },
    { name: "KAS", src: kas },
    { name: "Luminate", src: luminate },
    { name: "Microsoft", src: microsoft },
    { name: "New Venture Fund", src: newVentureFund },
    { name: "Open Society Foundation", src: openSocietyFoundation },
    { name: "PERFIT", src: perfit },
    { name: "SLACK", src: slack },
    { name: "Thomson Reuters", src: thomsonReuters },
    { name: "UE", src: ue },
    { name: "UNDEF", src: undef },
  ],
};

const GOBIERNOS = {
  titleKey: "pages.ecosistema_sector_governments",
  logos: [
    { name: "Cámara de Diputados", src: camaraDiputadosArgentina },
    { name: "Ecuador", src: ecuador },
    { name: "GCBA", src: gcba },
    { name: "General Pueyrredon", src: generalPueyrredon },
    { name: "Godoy Cruz", src: godoyCruz },
    { name: "La Costa", src: laCosta },
    { name: "Maipú", src: maipu },
    { name: "Mar Chiquita", src: marChiquita },
    { name: "Provincia de Buenos Aires", src: provinciaDeBuenosAires },
    { name: "Rosario", src: rosario },
    { name: "San Lorenzo", src: sanLorenzo },
    { name: "San Miguel de Tucumán", src: sanMiguelDeTucuman },
    { name: "Sunchales", src: sunchales },
    { name: "Universidad Nacional de Mar del Plata", src: universidadNacionalDeMarDelPlata },
    { name: "Universidad Nacional del Rosario", src: universidadNacionalDelRosario },
    { name: "Vicente Lopez", src: vicenteLopez },
  ],
};

const REDES = {
  titleKey: "pages.ecosistema_sector_networks",
  logos: [
    { name: "Abrelatam", src: abrelatam },
    { name: "Centre for Public Impact", src: centreForPublicImpact },
    { name: "Democracy R&D", src: democracyRD },
    { name: "Demoreset", src: demoreset },
    { name: "People Powered", src: peoplePowered },
    { name: "Open Government Partnership", src: openGovernmentPartnership },
    { name: "RINP", src: rinp },
  ],
};

const Sector = ({ titleKey, logos }) => {
  const intl = useIntl();

  return (
  <div className="ecosystem-sector">
    <h2 className="title ecosystem-sector-title">{intl.formatMessage({ id: titleKey })}</h2>
    <div className="ecosystem-logos">
      {logos.map((logo, i) => (
        <div key={i} className="ecosystem-logo-item">
          <img src={logo.src} alt={logo.name} />
        </div>
      ))}
    </div>
  </div>
  );
};

const Ecosistema = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "ecosystem.main_title" })}
        description={intl.formatMessage({ id: "pages.ecosistema_seo_description" })}
      />
      <PageHero
        color="#e9b4f2"
        title={intl.formatMessage({ id: "ecosystem.main_title" })}
        subtitle={intl.formatMessage({ id: "pages.ecosistema_subtitle" })}
        icon={iconEcosistema}
      />
      <div className="ecosystem-page">
        <div className="container">
          <Sector {...SOCIEDAD_CIVIL} />
          <Sector {...FINANCIADORES} />
          <Sector {...GOBIERNOS} />
          <Sector {...REDES} />
        </div>
      </div>
    </Layout>
  );
};

export default Ecosistema;
