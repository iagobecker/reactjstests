import React from "react";

import { Tabs } from "@feuer/react-tabs";

const NavProfile = () => {
  return (
    <Tabs
      activeTab={{
        id: "tab1",
        title: "",
      }}
    >
      <div>
        <Tabs.Tab id="tab1" title="Dados Pessoais">
          <div>
            {/* Conteúdo para a aba de Dados Pessoais */}
            <p>Conteúdo da aba de Dados Pessoais</p>
          </div>
        </Tabs.Tab>
        <Tabs.Tab id="tab2" title="Projetos">
          <div>
            {/* Conteúdo para a aba de Projetos */}
            <p>Conteúdo da aba de Projetos</p>
          </div>
        </Tabs.Tab>
        <Tabs.Tab id="tab3" title="Horas Extras">
          <div>
            {/* Conteúdo para a aba de Horas Extras */}
            <p>Conteúdo da aba de Horas Extras</p>
          </div>
        </Tabs.Tab>
        <Tabs.Tab id="tab4" title="Notas Fiscais">
          <div>
            {/* Conteúdo para a aba de Notas Fiscais */}
            <p>Conteúdo da aba de Notas Fiscais</p>
          </div>
        </Tabs.Tab>
      </div>
    </Tabs>
  );
};

export default NavProfile;
//export default function App() {
// return (

// <div className="App">
//   <Tabs
//     tabsProps={{
//       style: {
//         textAlign: "left",
//       },
//     }}
//     activeTab={{
//       id: "tab1",
//     }}
//   >
//     <Tabs.Tab id="tab1" title="Tab 1">
//       <div style={{ padding: 10 }}>This is tab 1</div>
//     </Tabs.Tab>
//     <Tabs.Tab id="tab2" title="Tab 2">
//       <div style={{ padding: 10 }}>This is tab 2</div>
//     </Tabs.Tab>
//   </Tabs>
// </div>
// );
//}

// import { Suspense, useState, useTransition } from "react";
// import ArtistPage from "./components/ArtistPage.js";
// import IndexPage from "./components/IndexPage.js";
// import Layout from "./components/Layout.js";

// export default function App() {
//   return (
//     <Suspense fallback={<BigSpinner />}>
//       <Router />
//     </Suspense>
//   );
// }

// function Router() {
//   const [page, setPage] = useState("/");
//   const [isPending, startTransition] = useTransition();

//   function navigate(url) {
//     startTransition(() => {
//       setPage(url);
//     });
//   }

//   let content;
//   if (page === "/") {
//     content = <IndexPage navigate={navigate} />;
//   } else if (page === "/the-beatles") {
//     content = (
//       <ArtistPage
//         artist={{
//           id: "the-beatles",
//           name: "The Beatles",
//         }}
//       />
//     );
//   }
//   return <Layout isPending={isPending}>{content}</Layout>;
// }

// function BigSpinner() {
//   return <h2>🌀 Loading...</h2>;
// }

// import { useState, useTransition } from "react";
// import TabButton from "./components/ExemploTabs01/TabButton.js";
// import AboutTab from "./components/ExemploTabs01/AboutTab.js";
// import PostsTab from "./components/ExemploTabs01/PostTab.js";
// import ContactTab from "./components/ExemploTabs01/ContactTab.js";

// export default function TabContainer() {
//   const [isPending, startTransition] = useTransition();
//   const [tab, setTab] = useState("about");

//   function selectTab(nextTab) {
//     startTransition(() => {
//       setTab(nextTab);
//     });
//   }

//   return (
//     <>
//       <TabButton isActive={tab === "about"} onClick={() => selectTab("about")}>
//         About
//       </TabButton>
//       <TabButton isActive={tab === "posts"} onClick={() => selectTab("posts")}>
//         Posts (slow)
//       </TabButton>
//       <TabButton
//         isActive={tab === "contact"}
//         onClick={() => selectTab("contact")}
//       >
//         Contact
//       </TabButton>
//       <hr />
//       {tab === "about" && <AboutTab />}
//       {tab === "posts" && <PostsTab />}
//       {tab === "contact" && <ContactTab />}
//     </>
//   );
// }
