const tours=[
 {id:1,name:"Nha Trang 3 ngày 2 đêm",place:"Nha Trang, Khánh Hòa",days:"3 ngày 2 đêm",price:"2.490.000đ",tag:"Biển xanh",img:"https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=900&q=80",desc:"Tận hưởng biển xanh, đảo đẹp và ẩm thực miền biển trong một hành trình ngắn.",schedule:["Ngày 1: Đón khách – nhận phòng – khám phá thành phố.","Ngày 2: Khám phá đảo – tắm biển – trải nghiệm hoạt động trên biển.","Ngày 3: Ăn sáng – mua đặc sản – kết thúc hành trình."]},
 {id:2,name:"Đà Lạt 3 ngày 2 đêm",place:"Đà Lạt, Lâm Đồng",days:"3 ngày 2 đêm",price:"2.190.000đ",tag:"Lãng mạn",img:"https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",desc:"Một chuyến đi nhẹ nhàng giữa khí hậu mát mẻ, đồi thông và những góc phố đặc trưng.",schedule:["Ngày 1: Đến Đà Lạt – check-in – dạo phố.","Ngày 2: Tham quan các điểm nổi bật – cà phê – chợ đêm.","Ngày 3: Tự do mua sắm – trả phòng – kết thúc."]},
 {id:3,name:"Phú Quốc 4 ngày 3 đêm",place:"Phú Quốc, Kiên Giang",days:"4 ngày 3 đêm",price:"4.390.000đ",tag:"Nghỉ dưỡng",img:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",desc:"Không gian nghỉ dưỡng, biển trong xanh và những trải nghiệm đảo đặc sắc.",schedule:["Ngày 1: Nhận phòng – nghỉ dưỡng.","Ngày 2: Khám phá đảo – biển – hoàng hôn.","Ngày 3: Trải nghiệm tự chọn – ẩm thực địa phương.","Ngày 4: Ăn sáng – trả phòng – kết thúc."]},
 {id:4,name:"Đà Nẵng – Hội An 4 ngày",place:"Đà Nẵng – Hội An",days:"4 ngày 3 đêm",price:"3.590.000đ",tag:"Khám phá",img:"https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=900&q=80",desc:"Kết hợp thành phố biển năng động với vẻ đẹp cổ kính của phố Hội.",schedule:["Ngày 1: Đà Nẵng – check-in – biển.","Ngày 2: Bà Nà Hills – trải nghiệm.","Ngày 3: Hội An – phố cổ – ẩm thực.","Ngày 4: Mua sắm – kết thúc."]},
 {id:5,name:"Hạ Long 2 ngày 1 đêm",place:"Hạ Long, Quảng Ninh",days:"2 ngày 1 đêm",price:"2.290.000đ",tag:"Di sản",img:"https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",desc:"Khám phá cảnh quan vịnh biển và trải nghiệm du thuyền ngắn ngày.",schedule:["Ngày 1: Khởi hành – lên du thuyền – tham quan vịnh.","Ngày 2: Ngắm cảnh – ăn sáng – trở về."]},
 {id:6,name:"Combo nghỉ dưỡng biển",place:"Nhiều điểm đến",days:"2 ngày 1 đêm",price:"1.590.000đ",tag:"Combo",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",desc:"Combo linh hoạt dành cho nhóm bạn hoặc gia đình muốn nghỉ ngắn ngày.",schedule:["Ngày 1: Nhận phòng – nghỉ dưỡng – tự do khám phá.","Ngày 2: Ăn sáng – trả phòng – kết thúc."]}
];
const products=[
 ["🏨","Voucher khách sạn","Ưu đãi lưu trú tại các điểm du lịch phổ biến.","Từ 690.000đ"],
 ["🎟️","Vé tham quan","Vé tham quan các địa điểm nổi bật.","Từ 120.000đ"],
 ["🚐","Thuê xe du lịch","Dịch vụ xe theo ngày cho nhóm nhỏ.","Từ 800.000đ"],
 ["🌴","Combo trải nghiệm","Kết hợp vé, dịch vụ và hoạt động địa phương.","Từ 450.000đ"]
];
const grid=document.getElementById("tourGrid");
grid.innerHTML=tours.map(t=>`<article class="card"><div class="card-img" style="background-image:url('${t.img}')"><span class="tag">${t.tag}</span></div><div class="card-body"><h3>${t.name}</h3><div class="meta">📍 ${t.place} · ⏱ ${t.days}</div><div class="price">${t.price} <small>/ người</small></div><div class="card-actions"><button class="text-btn" onclick="showTour(${t.id})">Xem chi tiết →</button><a class="btn btn-small" href="#booking" onclick="selectTour(${t.id})">Đặt tour</a></div></div></article>`).join("");
document.getElementById("productGrid").innerHTML=products.map(p=>`<div class="product"><div class="product-icon">${p[0]}</div><h3>${p[1]}</h3><p>${p[2]}</p><b>${p[3]}</b></div>`).join("");
const select=document.getElementById("tourSelect");
select.innerHTML=tours.map(t=>`<option value="${t.id}">${t.name} — ${t.price}</option>`).join("");
function selectTour(id){select.value=id}
function showTour(id){const t=tours.find(x=>x.id===id);document.getElementById("modalContent").innerHTML=`<div class="modal-img" style="background-image:url('${t.img}')"></div><span class="eyebrow dark">${t.tag}</span><h2>${t.name}</h2><p><b>📍 ${t.place}</b> · ${t.days} · <b>${t.price}</b></p><p>${t.desc}</p><h3>Lịch trình</h3><ul>${t.schedule.map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn" href="#booking" onclick="closeModal();selectTour(${t.id})">Đặt tour giả lập</a>`;document.getElementById("tourModal").classList.add("show")}
function closeModal(){document.getElementById("tourModal").classList.remove("show")}
function toggleMenu(){document.getElementById("navMenu").classList.toggle("open")}
document.getElementById("tourModal").addEventListener("click",e=>{if(e.target.id==="tourModal")closeModal()});
document.getElementById("bookingForm").addEventListener("submit",e=>{e.preventDefault();const code="VE-"+new Date().getFullYear()+"-"+Math.floor(1000+Math.random()*9000);const name=document.getElementById("name").value;showToast(`Đặt tour thành công, ${name}! Mã demo: ${code}`);e.target.reset();document.getElementById("people").value=2});
function showToast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),4500)}
document.getElementById("date").min=new Date().toISOString().split("T")[0];
