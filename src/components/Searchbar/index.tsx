import 'primeicons/primeicons.css';

function Searchbar() {

  return (
    <div className="h-[100px] px-[24px] bg-[#292C32] flex items-center justify-between gap-[24px] text-[#ffff]">
      <span className="pi pi-search absolute ml-[16px] text-[#494c53]"></span>
      <input type="text" className="max-w-[400px] w-full h-[50px] border relative border-[#494c53] rounded-[8px] py-[8px] pl-[40px] pr-[8px]" />
      <a href="" className="flex items-center gap-[8px]">
        <div className="w-[50px] h-[50px] rounded-full bg-white object-cover shrink-0"></div>
        <span>Nome aqui</span>
      </a>
    </div>
  )
}

export default Searchbar
