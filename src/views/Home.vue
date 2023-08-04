<template>
    <div class="home-box">
        <ul class="list">
            <li>
                <p>今日订单收入</p>
                <p>￥6666</p>
                <p>+1241安抚</p>
            </li>
            <li>
                <p>今日订单收入</p>
                <p>￥6666</p>
                <p>+1241安抚</p>
            </li>
            <li>
                <p>今日订单收入</p>
                <p>￥6666</p>
                <p>+1241安抚</p>
            </li>
            <li>
                <p>今日订单收入</p>
                <p>￥6666</p>
                <p>+1241安抚</p>
            </li>
        </ul>
        <div class="chart">
            <!-- 折线图 -->
            <div class="lineGraph" ref="lineGraph">

            </div>
            <!-- 柱状图 -->
            <div class="histogram" ref="histogram">

            </div>
        </div>
        <div class="home-card">
            <div class="homeCard-left">
                <div class="homeCardLeft-nav">
                    <h3>活跃学员</h3>
                    <div>
                        <span>日期</span>
                        <span>2020-09-05</span>
                    </div>
                </div>
                <ul class="homeCardLeftUl">
                    <li class="homeCardLeft-user" v-for="item in 6">
                        <div>
                            <img src="../../public/favicon.ico" alt="">
                        </div>
                        <div class="homeCardLeftUser-name">
                            <div class="cardLeft-text">
                                <p>小仓鼠的老房子</p>
                                <p>95%</p>
                            </div>
                            <div class="cardLeft-text">
                                <div style="font-size: 11px;"> 学号:1243</div>
                                <div class="demo-progress">
                                    <el-progress :stroke-width="11" :percentage="100" :show-text="false" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="homeCard-right">

                <div class="homeCardRight-nav">
                    <h3>实时概况</h3>
                    <div>
                        <span>日期</span>
                        <span>2020-09-05</span>
                    </div>
                </div>
                <ul class="homeCardRightUl">
                    <li class="homeCardRightLi" v-for="item in 4">
                        <div class="homeCardRight-user">
                            <div>
                                <img src="../../public/favicon.ico" alt="">
                            </div>
                            <div>
                                <div>
                                    <p>学员数</p>
                                    <p>95%</p>
                                </div>
                            </div>
                        </div>
                        <p>同昨天对比+1.2% 昨天78</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import * as echarts from 'echarts';
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)

const lineGraph = ref();
const histogram = ref()



const ineGraphInit = () => {
    const ineGraphChart = echarts.init(lineGraph.value);
    // 此处粘贴图表代码
    let option = {
        title: {
            text: '时段分布'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1:00', '3:00', '5:00', '7:00', '9:00', '11:00']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    ineGraphChart.setOption(option)
}

const histogramInit = () => {
    const histogramChart = echarts.init(histogram.value)
    let option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ]
    };
    histogramChart.setOption(option)
}

onMounted(() => {
    // 调用函数 处理图表将其渲染到页面
    ineGraphInit()
    histogramInit()
    window.onresize = function () {
        ineGraphChart.resize()
        histogramChart.resize()
    }
})

</script>

<style scoped lang="less">
* {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

.demo-progress .el-progress--line {
    width: 112px;

}

.home-box {
    background: rgba(235, 236, 237, 1);
}

.list {
    display: flex;
    justify-content: space-around;
    margin-top: 24px;

    li {
        width: 280px;
        height: 123px;
        background: linear-gradient(130.24deg, rgba(112, 232, 201, 1) 0%, rgba(57, 206, 199, 1) 100%);
        font-size: 18px;
        text-align: right;
        line-height: 26.06px;
        color: rgba(255, 255, 255, 1);
        padding-top: 27px;
    }
}

.chart {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;

    .lineGraph {
        width: 55%;
        height: 349px;
        background: #fff;
    }

    .histogram {
        width: 40%;
        height: 349px;
        background: #fff;
    }
}

.home-card {
    display: flex;


    .homeCard-left {
        margin: 0 20px;
        width: 55%;
        height: 349px;
        background: #fff;

        .homeCardLeft-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0;
        }

        .homeCardLeftUl {
            display: flex;
            flex-wrap: wrap;
            // justify-content: space-around;

        }

        .homeCardLeft-user {
            width: 45%;
            height: 50px;
            display: flex;
            // justify-content: center;
            margin-bottom: 20px;

            .homeCardLeftUser-name {
                width: 100%;
            }

            .cardLeft-text {
                display: flex;
                justify-content: space-between;
            }

        }
    }

    .homeCard-right {
        width: 40%;
        height: 349px;
        background: #fff;

        img {
            width: 55px;
            height: 55px;
        }

        .homeCardRight-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0;
        }

        .homeCardRightUl {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 15px;

            .homeCardRight-user {
                width: 144px;
                display: flex;
                flex-wrap: wrap;
                // justify-content: space-between;
            }
        }

    }
}
</style>