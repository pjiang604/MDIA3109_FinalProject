import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";


export default function Area() {  //Need to insert the name of the neighbourhood area and insert it into the header nav text
  return (
    <main className={``} >

      <HeaderNav text="[Placeholder Area]" type="full-backPlay" />
      <div className={``}>
      </div>
      <Nav type="home" />
    </main>
  )
}
