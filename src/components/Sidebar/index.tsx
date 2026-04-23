function Sidebar() {
  return (
    <nav className="h-screen w-[200px] px-[24px] py-[32px] bg-[#292C32]">
      <ul className="h-full flex flex-col justify-between text-[#FFFFFF]">
        <div className="">
          <li><a href="#" className="block mb-5">*LOGO*</a></li>
          <li><a href="#">Visão Geral</a></li>
          <li><a href="#">Meus Relatórios</a></li>
          <li><a href="#">Banco de Horas</a></li>
        </div>
        <li><a href="#">Configurações</a></li>
      </ul>
    </nav>
  )
}

export default Sidebar
