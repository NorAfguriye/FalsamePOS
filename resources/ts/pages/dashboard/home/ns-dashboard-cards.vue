<template>
  <div class="flex flex-wrap mb-4">
  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
    <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
      <div class="flex-auto p-4">
        <div class="flex flex-wrap">
          <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 class="text-blueGray-400 uppercase font-bold text-xs">{{ __( 'Total Sales' ) }}</h5>
            <span class="font-bold text-xl"> {{ ( report.total_paid_orders || 0 ) | currency( 'abbreviate' ) }}</span>
          </div>
          <div class="relative w-auto pl-4 flex-initial">
            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-600">
              <i class="las la-cart-plus text-3xl "></i>
            </div>
          </div>
        </div>
        <p class="text-sm text-blueGray-500 mt-4">
          <span class="text-emerald-500 mr-2">+{{ ( report.day_paid_orders || 0 ) | currency }} {{ __( 'Today' ) }}</span>
        </p>
      </div>
    </div>
  </div>
  <!-- 02 -->
  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
    <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
      <div class="flex-auto p-4">
        <div class="flex flex-wrap">
          <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 class="text-blueGray-400 uppercase font-bold text-xs">{{ __( 'Incomplete Orders' ) }}</h5>
            <span class="font-bold text-xl"> {{ ( report.total_partially_paid_orders + report.total_unpaid_orders || 0 ) | currency( 'abbreviate' ) }}</span>
          </div>
          <div class="relative w-auto pl-4 flex-initial">
            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-600">
              <i class="las la-not-equal text-3xl "></i>
            </div>
          </div>
        </div>
        <p class="text-sm text-blueGray-500 mt-4">
          <span class="text-emerald-500 mr-2">+{{ ( report.day_unpaid_orders + report.day_partially_paid_orders || 0 ) | currency }} {{ __( 'Today' ) }}</span>
        </p>
      </div>
    </div>
  </div>
  <!-- 03 -->
  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
    <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
      <div class="flex-auto p-4">
        <div class="flex flex-wrap">
          <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 class="text-blueGray-400 uppercase font-bold text-xs">{{ __( 'Wasted Goods' ) }}</h5>
            <span class="font-bold text-xl"> {{ ( report.total_wasted_goods || 0 ) | currency( 'abbreviate' ) }}</span>
          </div>
          <div class="relative w-auto pl-4 flex-initial">
            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-600">
              <i class="las la-heart-broken text-3xl"></i>
            </div>
          </div>
        </div>
        <p class="text-sm text-blueGray-500 mt-4">
          <span class="text-emerald-500 mr-2">+{{ ( report.day_wasted_goods || 0 ) | currency }} {{ __( 'Today' ) }}</span>
        </p>
      </div>
    </div>
  </div>
  <!-- 04 -->
  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
    <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
      <div class="flex-auto p-4">
        <div class="flex flex-wrap">
          <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 class="text-blueGray-400 uppercase font-bold text-xs">{{ __( 'Expenses' ) }}</h5>
            <span class="font-bold text-xl">{{ ( report.total_expenses || 0 ) | currency( 'abbreviate' ) }}</span>
          </div>
          <div class="relative w-auto pl-4 flex-initial">
            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-600">
              <i class="las la-money-check-alt text-3xl"></i>
            </div>
          </div>
        </div>
        <p class="text-sm text-blueGray-500 mt-4">
          <span class="text-emerald-500 mr-2">+{{ ( report.day_expenses || 0 ) | currency }} {{ __( 'Today' ) }}</span>
        </p>
      </div>
    </div>
  </div>
</div>

</template>
<script>
import { nsHttpClient } from '@/bootstrap';
import { __ } from '@/libraries/lang';
export default {
    name : 'ns-dashboard-cards',
    data() {
        return {
            report: {}
        }
    },
    mounted() {
        this.loadReport();
        console.log( nsLanguage.getEntries() );
    },
    methods: {
        __,
        loadReport() {
            nsHttpClient.get( '/api/nexopos/v4/dashboard/day' )
                .subscribe( result => {
                    this.report    =   result;
                })
        }
    }
}
</script>