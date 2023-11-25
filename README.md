## createSlice
yeni reduces ogelerini tanımlamak için kullandığımız bir fonksiyondur, tutmamız gereken değerleri ekleriz. yazılımı ve örneği şu şekildedir:
export const todoSlice = createSlice({
name:'todo',
initalState,
reducers:{
..... //reducer fonksiyonları eklenir.
}}

## configureStore
projeyi ilk kurarken src altında store folderi oluşturulup içerisine index.js filesi atanır ve burada yazılmaya başlanır. storeyi yapılandırmayı basic hale getirir. index dosyasında gördüğümüz root işlemine benzerdir. yazılımı ve örneği şu şekildedir:
export const store = configreStore ({
reducer:{
counter:counterReducer
//burada kullanılacak slice eklenir.
}})

## createAsyncThunk
bildiğimiz APİ'ye istek atma işleminin redux toolkit karşılığıdır. asenkrondur. amaç bir endpointe istek atıp sonraki adımları uygulamaktır. axios'u da nmp i axios diyerek indirmek unutulmamalıdır:) createAsyncThunk ('todoId', async) içerisinde APİ'den önce yazdııgmız sey ise isimlendirme, key belirtme adımıdır. yazılımı ve örneği şu şekildedir.
export const fetchTodos=createAsyncThunk('tod/fetchTodos', async () => {
const response = await axios.get(...........APİ..............);
return response.data

## REDUCER
bir uygulamanın ve eylemin mevcut durumunu alır. bunları birlikte işler ve yeni durum üretir. action gerçekleştiğinde bu action reducer tarafından yakalanır ve güncellenir.
reducers:{
increment:(State)=>{
state.value+=1

## SLİCE
statenin belirli bir bölümünü ve reudcerleri yönetir. ilgili statenin initialStatesini özelliklierini vs tutuldugu toplandıgı yer. kodun yönetimini kolaylaştırır. component mantıgıyla ilerlenebilinir. 

## PROVİDER 
redux storunu react uygulamasına bağlar. en üst düzeyde yer alır. app'i sarmalar. bu sayede storeyi tüm uygulamalarda kullanılabılır ulasılabılır hale getırır. pross passing işlemi de yapılır.
app.js'de:
<Provider store={store} >
<Component {...pageprops}
</Provider>

## useSelector 
bir rtk hookudur. state içerisinden bir veriyi kullanmam gerekiyorsa işime yarar. yanı storenın herhangı bir parcasını okumak içindir. kullanımı:
const counter = useSelector((state) => state.counter.value 
son kısımdakı value ulasılmak ıstenen degerdır.

## useDispatch 
storea mudahele edebildiğimiz hooktur, güncelleme işlemi yapılabilir. kullanımı:
const dispatch = useDispatch() yazılır ve sonrasında tetiklenmesi istenen değer dispatch(.....) içerisinde yazılır.
