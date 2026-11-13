'use client';
import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import URLFilters from './url-filters';
import Storefront, { ProductImage } from './storefront';
import { ArrowUpRight, ArrowRight, Search, ShoppingBag, X, Plus, Minus, Check, Download } from 'lucide-react';

type Category = 'all' | 'nam' | 'nu' | 'gile';
type Product = { id: number; name: string; category: Category; label: string; color: string; swatch: string; crop: [number, number, number, number]; tag?: string };
const products: Product[] = [
  {id:1,name:'Áo phao Classic',category:'nam',label:'ÁO KHOÁC NAM',color:'Đen',swatch:'#242623',crop:[110,188,90,88],tag:'NỔI BẬT'},
  {id:2,name:'Gile Essential',category:'gile',label:'ÁO GILE',color:'Xanh rêu',swatch:'#3d4238',crop:[202,188,90,88],tag:'THE Q SELECT'},
  {id:3,name:'Áo phao Ivory',category:'nu',label:'ÁO KHOÁC NỮ',color:'Kem',swatch:'#d9d3bf',crop:[295,188,88,88]},
  {id:4,name:'Áo phao có mũ Daily',category:'nam',label:'ÁO KHOÁC NAM',color:'Xanh olive',swatch:'#626656',crop:[18,371,88,88]},
  {id:5,name:'Gile Quilted',category:'gile',label:'ÁO GILE',color:'Đen',swatch:'#222825',crop:[296,280,87,87]},
  {id:6,name:'Áo phao Light',category:'nu',label:'ÁO KHOÁC NỮ',color:'Trắng ngà',swatch:'#e4dfcc',crop:[296,372,88,86]},
];
type CartItem = {id:number; size:string; quantity:number};
function Dialog({title,children,onClose,wide=false}:{title:string;children:React.ReactNode;onClose:()=>void;wide?:boolean}) {
  const ref=useRef<HTMLDialogElement>(null);
  useEffect(()=>{const dialog=ref.current;dialog?.showModal();return()=>dialog?.close()},[]);
  return <dialog ref={ref} className={`dialog ${wide?'dialog-wide':''}`} onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose()}}><div className="dialog-heading"><h2>{title}</h2><button className="icon-button" aria-label="Đóng" onClick={onClose}><X size={22}/></button></div>{children}</dialog>
}
export default function ShopShell({children}:{children:React.ReactNode}) {
  const pathname=usePathname();
  const router=useRouter();
  const about=pathname.startsWith('/ve-chung-toi');
  const [category,setCategory]=useState<Category>('all');
  const [query,setQuery]=useState('');
  const [searchOpen,setSearchOpen]=useState(false);
  const [selected,setSelected]=useState<Product|null>(null);
  const [size,setSize]=useState('M');
  const [cart,setCart]=useState<CartItem[]>([]);
  const [favorites,setFavorites]=useState<number[]>([]);
  const [cartOpen,setCartOpen]=useState(false);
  const [favoriteOnly,setFavoriteOnly]=useState(false);
  const [notice,setNotice]=useState('');
  const [info,setInfo]=useState<string|null>(null);
  const [loaded,setLoaded]=useState(false);
  const [expanded,setExpanded]=useState(false);
  useEffect(()=>{try{const c=JSON.parse(localStorage.getItem('theq-cart')||'[]');const f=JSON.parse(localStorage.getItem('theq-favorites')||'[]');if(Array.isArray(c))setCart(c.filter(x=>products.some(p=>p.id===x.id)&&['S','M','L','XL','XXL'].includes(x.size)&&Number.isInteger(x.quantity)&&x.quantity>0&&x.quantity<=99));if(Array.isArray(f))setFavorites(f.filter(x=>products.some(p=>p.id===x)));}catch{}setLoaded(true)},[]);
  useEffect(()=>{if(loaded){localStorage.setItem('theq-cart',JSON.stringify(cart));localStorage.setItem('theq-favorites',JSON.stringify(favorites))}},[cart,favorites,loaded]);
  useEffect(()=>{if(!notice)return;const t=setTimeout(()=>setNotice(''),3000);return()=>clearTimeout(t)},[notice]);
  const syncFilters=useCallback((params:URLSearchParams)=>{const requested=params.get('category');setCategory(requested&&['all','nam','nu','gile'].includes(requested)?requested as Category:'all');setQuery(params.get('q')||'');setFavoriteOnly(params.get('favorites')==='1');setExpanded(params.get('view')==='all'||params.has('q')||params.has('favorites'))},[]);
  const navigateCollection=(filters:Record<string,string>={})=>{const params=new URLSearchParams(filters);const search=params.toString();router.push(search?'/?'+search+'#collection':'/#collection');if(pathname==='/')document.getElementById('collection')?.scrollIntoView({behavior:'smooth'})};
  const chooseCategory=(id:Category)=>navigateCollection(id==='all'?{}:{category:id});
  const searchProducts=(value:string)=>{setSearchOpen(false);navigateCollection(value.trim()?{q:value.trim()}:{})};
  useEffect(()=>{setSearchOpen(false);setSelected(null);setCartOpen(false);setInfo(null)},[pathname]);
  const toggleFavorite=(id:number)=>setFavorites(f=>f.includes(id)?f.filter(x=>x!==id):[...f,id]);
  const addToCart=()=>{if(!selected)return;setCart(current=>{const match=current.find(i=>i.id===selected.id&&i.size===size);return match?current.map(i=>i===match?{...i,quantity:Math.min(i.quantity+1,99)}:i):[...current,{id:selected.id,size,quantity:1}]});setNotice('Đã thêm vào giỏ yêu cầu');setSelected(null)};
  let filtered=products.filter(p=>(category==='all'||p.category===category)&&(!favoriteOnly||favorites.includes(p.id))&&`${p.name} ${p.label} ${p.color}`.toLocaleLowerCase('vi').includes(query.toLocaleLowerCase('vi')));
  const count=cart.reduce((a,c)=>a+c.quantity,0);
  const downloadRequest=()=>{const content=['THE Q — YÊU CẦU TƯ VẤN','Đây là danh sách tham khảo, chưa phải đơn hàng đã xác nhận.','Giá, tồn kho và giao hàng cần được THE Q xác nhận.','',...cart.map(i=>`${products.find(p=>p.id===i.id)?.name} | Size ${i.size} | Số lượng ${i.quantity}`)].join('\n');const url=URL.createObjectURL(new Blob(['\uFEFF'+content],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='THE-Q-yeu-cau-tu-van.txt';a.click();URL.revokeObjectURL(url);setNotice('Đã tải danh sách yêu cầu tư vấn')};
  return <>
    <Suspense fallback={null}><URLFilters onChange={syncFilters}/></Suspense>
    <Storefront about={about} showHome={pathname==='/'} routeContent={children} products={products} filtered={filtered} category={category} query={query} favorites={favorites} favoriteOnly={favoriteOnly} expanded={expanded} count={count} chooseCategory={chooseCategory} onSelect={p=>{setSelected(products.find(item=>item.id===p.id)!);setSize('M')}} onFavorite={toggleFavorite} onSearch={()=>setSearchOpen(true)} onQuery={searchProducts} onCart={()=>setCartOpen(true)} onInfo={setInfo} onShowFavorites={()=>navigateCollection({favorites:'1'})} onClear={()=>navigateCollection()} onAll={()=>navigateCollection({view:'all'})}/>
    {notice&&<div className="toast" role="status"><Check size={18}/>{notice}</div>}
    {searchOpen&&<Dialog title="Bạn đang tìm điều gì?" onClose={()=>setSearchOpen(false)}><form onSubmit={e=>{e.preventDefault();searchProducts(query)}}><label className="search-field"><Search size={20}/><input autoFocus aria-label="Từ khóa tìm kiếm" placeholder="Áo phao, gile, màu kem…" value={query} onChange={e=>setQuery(e.target.value)}/></label><div className="search-suggestions"><span>GỢI Ý CHO BẠN</span>{['Áo phao','Gile','Kem'].map(q=><button type="button" key={q} onClick={()=>setQuery(q)}>{q}<ArrowUpRight size={13}/></button>)}</div><button type="submit" className="button button-dark full-width">TÌM KIẾM <ArrowRight size={17}/></button></form></Dialog>}
    {selected&&<Dialog title="Chi tiết sản phẩm" onClose={()=>setSelected(null)} wide><div className="product-detail"><div><ProductImage id={selected.id} alt={selected.name}/><small>Ảnh minh họa dựng từ tư liệu khách hàng.</small></div><div><div className="eyebrow">{selected.label}</div><h3>{selected.name}</h3><p className="detail-price">Liên hệ để nhận báo giá</p><p>Thiết kế áo khoác THE Q cho tủ đồ mùa lạnh. Thông số chất liệu, kích thước thực tế và tình trạng hàng sẽ được xác nhận khi tư vấn.</p><div className="detail-color"><i style={{background:selected.swatch}}/>Màu tham khảo: {selected.color}</div><div className="size-heading"><span>KÍCH CỠ QUAN TÂM</span><button onClick={()=>setInfo('size')}>Hướng dẫn chọn size</button></div><div className="sizes">{['S','M','L','XL','XXL'].map(s=><button aria-pressed={size===s} className={size===s?'chosen':''} key={s} onClick={()=>setSize(s)}>{s}</button>)}</div><button className="button button-dark full-width" onClick={addToCart}>THÊM VÀO GIỎ YÊU CẦU <ShoppingBag size={18}/></button><small>Giỏ yêu cầu được lưu trên thiết bị. Chưa phát sinh đơn hàng hoặc thanh toán.</small></div></div></Dialog>}
    {cartOpen&&<Dialog title={`Giỏ yêu cầu của bạn (${count})`} onClose={()=>setCartOpen(false)}>{cart.length?<><p className="dialog-intro">Lưu các thiết kế và kích cỡ bạn quan tâm để trao đổi với THE Q. Giá và tồn kho cần được xác nhận.</p><div className="cart-list">{cart.map(item=>{const p=products.find(p=>p.id===item.id)!;return <div className="cart-item" key={`${item.id}-${item.size}`}><ProductImage id={p.id} alt={p.name}/><div><h3>{p.name}</h3><p>{p.color} · Size {item.size}</p><div className="quantity"><button aria-label={`Giảm số lượng ${p.name}`} disabled={item.quantity===1} onClick={()=>setCart(c=>c.map(i=>i===item?{...i,quantity:i.quantity-1}:i))}><Minus size={13}/></button><span>{item.quantity}</span><button aria-label={`Tăng số lượng ${p.name}`} disabled={item.quantity>=99} onClick={()=>setCart(c=>c.map(i=>i===item?{...i,quantity:i.quantity+1}:i))}><Plus size={13}/></button></div></div><button className="icon-button" aria-label={`Xóa ${p.name} khỏi giỏ`} onClick={()=>setCart(c=>c.filter(i=>i!==item))}><X size={17}/></button></div>})}</div><button className="button button-dark full-width" onClick={downloadRequest}>TẢI DANH SÁCH TƯ VẤN <Download size={17}/></button><p className="small-note">Tệp được lưu về máy; chưa được gửi đến THE Q.</p></>:<div className="empty-state"><ShoppingBag size={36}/><h3>Giỏ yêu cầu còn trống</h3><p>Thêm chiếc áo bạn yêu thích để bắt đầu.</p><button className="button button-dark" onClick={()=>{setCartOpen(false);chooseCategory('all')}}>KHÁM PHÁ SẢN PHẨM <ArrowRight size={16}/></button></div>}</Dialog>}
    {info&&<Dialog title={info==='size'?'Tìm kích cỡ phù hợp':info==='brand'?'Về thương hiệu THE Q':'Thông tin mua hàng'} onClose={()=>setInfo(null)}>{info==='size'?<div className="info-content"><p>Để chọn áo vừa vặn, hãy chuẩn bị số đo vòng ngực, chiều cao và cân nặng. Bạn cũng có thể đo một chiếc áo đang mặc thoải mái để đối chiếu.</p><ol><li>Đo vòng ngực tại vị trí rộng nhất, giữ thước nằm ngang.</li><li>Xác định độ dài áo và độ rộng vai mong muốn.</li><li>Cho biết bạn muốn mặc ôm hay phối thêm nhiều lớp áo.</li></ol><p>Bảng số đo chính thức chưa được khách hàng cung cấp. Các lựa chọn S–XXL dùng để ghi nhận nhu cầu, cần được THE Q xác nhận trước khi mua.</p></div>:info==='brand'?<div className="info-content"><p>THE Q là thương hiệu áo khoác mùa đông trong tài liệu khách hàng cung cấp. Danh mục tham khảo gồm áo phao nam, áo phao nữ và áo gile, với các màu đen, xanh rêu và kem.</p><p>Hình ảnh xưởng may, sản phẩm thực tế và phối cảnh cửa hàng được sử dụng từ tư liệu gốc. Bộ ảnh sản phẩm mới được dựng để minh họa cho website.</p></div>:<div className="info-content"><p>Website hiện là bản giới thiệu thương hiệu và danh mục tham khảo. Giá bán, tồn kho, chính sách vận chuyển, đổi trả và thông tin liên hệ chính thức đang chờ THE Q cung cấp.</p><p>Bạn có thể lưu sản phẩm vào giỏ yêu cầu và tải danh sách về thiết bị. Website chưa tiếp nhận đơn hàng, thanh toán hoặc tự gửi yêu cầu tư vấn.</p></div>}</Dialog>}
  </>;
}

