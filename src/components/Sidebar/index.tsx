import 'primeicons/primeicons.css';

function Sidebar() {
  return (
    <nav className="px-[24px] py-[32px] bg-[#292C32]">
      <ul className="h-full w-[200px] flex flex-col justify-between text-[#7e7f84]">
        <div className="flex flex-col gap-[16px]">
          <li><a href="#" className="block mb-5 text-[24px] text-[#ffff]">Timely On</a></li>
          <li><a href="#" className="text-[20px]"><span className="pi pi-id-card mr-[8px]"></span>Visão Geral</a></li>
          <li><a href="#" className="text-[20px]"><span className="pi pi-chart-bar mr-[8px]"></span>Meus Relatórios</a></li>
          <li><a href="#" className="text-[20px]"><span className="pi pi-clock mr-[8px]"></span>Banco de Horas</a></li>
        </div>
        <li><a href="#" className="text-[20px]"><span className="pi pi-cog mr-[8px]"></span>Configurações</a></li>
      </ul>
    </nav>
  )
}

export default Sidebar
