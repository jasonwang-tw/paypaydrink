<template>
  <div id="privacy" class="page">
    <topmenu />
    <div class="pageContent mx-auto p-10">
      <h1 class="text-main-500 mb-10">隱私政策</h1>
      <div class="text-sup1-900">
        <p>1. 認知與接受條款 貝克漢運動健康事業</p>
        <p>(以下簡稱「本會」)係依據本服務條款提供貝克漢運動健康事業網站服務</p>
        <p>
          (以下簡稱「本服務」)。當您使用本服務時，即表示您已閱讀、瞭解並同意接受本服務條款之所有內容。此外，當您使用本會的特定服務時，可能會依據該特定服務之性質，而須遵守本會所另行公告之服務條款或相關規定。此另行公告之服務條款或相關規定亦均併入屬於本服務條款之一部分。本會有權於任何時間修改或變更本服務條款之內容，建議您隨時注意該等修改或變更。您於任何修改或變更後繼續使用本服務，視為您已閱讀、瞭解並同意接受該等修改或變更。如果您不同意本服務條款的內容，或者您所屬的國家或地域排除本服務條款內容之全部或一部時，您應立即停止使用本服務。
        </p>
        <p>
          若您為未滿二十歲，除應符合上述規定外，並應於您的家長（或監護人）閱讀、瞭解並同意本服務條款之所有內容及其後修改變更後，方得使用或繼續使用本服務。當您使用或繼續使用本服務時，即推定您的家長（或監護人）已閱讀、瞭解並同意接受本服務條款之所有內容及其後修改變更。
        </p>
        <p>2. 如須註冊時您的註冊義務 為了能使用本網站部分服務，您同意以下事項：</p>
        <p>(1)填寫個人資料時，您務必提供您本人正確、最新及完整的資料</p>
        <p>
          (2)維持並更新您個人資料，確保其為正確、最新及完整。若您提供任何錯誤、不實或不完整的資料，本會有權暫停或終止您的帳號，並拒絕您使用本服務之全部或一部。
        </p>
        <p>3. 本會隱私權保護政策</p>
        <p>
          關於您的訂閱資訊依本會「隱私權保護政策」受到保護與規範。您了解當您使用本服務時，您同意本會依據「隱私權保護政策」進行您個人資料的蒐集與利用，包括跨國間的傳輸與儲存及本會內部之利用。
        </p>
        <p>4. 使用者的守法義務及承諾</p>
        <p>
          您承諾絕不為任何非法目的或以任何非法方式使用本服務，並承諾遵守中華民國相關法規及一切使用網際網路之國際慣例。您若係中華民國以外之使用者，同意遵守所屬國家或地域之法令。您同意並保證不得利用本服務從事侵害他人權益或違法之行為，包括但不限於：
        </p>
        <p>
          (1)干擾或中斷本服務或伺服器或連結本服務之網路，或不遵守連結至本服務之相關需求、程序、政策或規則等；
        </p>
        <p>(2)冒用他人名義使用本服務； (3)違反依法律或契約所應負之保密義務；</p>
        <p>(4)偽造訊息來源或以任何方式干擾傳輸來源之認定；</p>
        <p>(5)追蹤他人或其他干擾他人而蒐集或儲存他人之個人資訊；</p>
        <p>(6)其他本會有正當理由認為不適當之行為。 5. 免責聲明</p>
        <p>您明確了解並同意本會管理人、受僱人、代理人、合夥人及授權人，</p>
        <p>
          無須為您任何直接、間接、附隨、特別、衍生、懲罰性的損害負責，包括但不限於因下述事由所生利潤、商譽、使用、資料之損害或其他無形損失（即令本會曾被告知該等損害之可能性亦同）：(a)使用或無法使用本服務；(b)替代商品及服務之購買成本；(c)他人未經授權存取或修改您的傳輸或資料；(d)任何第三人就本服務所為之聲明或行為，或(e)任何其他與本服務有關者。部分管轄區域並不允許對於特定保證責任的排除或是對於附隨或衍生損害的限制或免除。於此情形，本條前述限制對您不適用。
        </p>
        <p>6. 交易行為</p>
        <p>
          (1)您同意在本網站所進行的所有線上消費，都以本網站系統所自動記錄的電子交易資料為準，如有糾紛，亦以該電子交易資料為認定標準。若您發現交易資料不正確，應立即通知本網站。
        </p>
        <p>(2)</p>
        <p>
          若您於本網站訂購產品後，經由本網站退換貨、取消訂單之頻率過高，或任何對本網站造成系統負擔與資訊作業上之困擾或損害，經本網站判定為惡意行為時，本網站將保留拒絕交易或停止對您提供本服務之權利。
        </p>
      </div>
    </div>
    <footerBar />
  </div>
</template>

<script>
  // @ is an alias to /src
  import topmenu from '@/components/topmenu'
  import footerBar from '@/components/footerBar'

  export default {
    name: 'privacy',
    components: {
      topmenu,
      footerBar
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
.page{
  background-repeat: no-repeat;
  background-position: 10% 10%;
  background-image: url(../assets/gradientBg.png);
}
.pageContent{
  max-width: 920px;
  
}
</style>
