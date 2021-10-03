<template>
    <div class="projects">
        <h3>The projects listed are a variety of projects spanning from personal projects to school projects.</h3>
        <p>This list is not-exhaustive and are subject to updates.</p>
    </div>

<div class="content">
    <h1>Finance</h1>
    <h3>Estimating and Forecasting Yield Curves for Zero Coupon Bonds</h3>
    <h5>School Project | R</h5>
    <ul stlye="list-style-type:disc">
        <li>Calculated forward and spot rates calculated from bond prices</li>
        <li>Fitted the yield curves using Nelson-Siegal Model and Nelson-Siegal-Svensson Model for Yield curves</li>
        <li>Forecasted the yield curves using ARIMA modeling</li>
        <li>Visualised over 8000 yield curves as a 3D surface plot</li>
    </ul>
    <img src="../assets/3D_Surface_Plot.gif" alt="3D surface plot visualization">
    <br>
    <h3>Algorithmic Trading</h3>
    <h5>Personal Project | Python</h5>
    <ul stlye="list-style-type:disc">
        <li>Back-test Equal-Weight, Quantitative Momentum &amp; Quantitative Value strategies</li>
        <li>Collected API batch calls from IEX Cloud API in sandbox environment</li>
    </ul>
    <br>
    <hr>
    <br>
    <h1>Operations</h1>
    <h3>Optimising operations for a liquour store</h3>
    <h5>School Project | Microsoft Excel</h5>
    <ul stlye="list-style-type:disc">
        <li>Forecasted demand for various alcohols</li>
        <li>Created a manpower allocation model</li>
        <li>Developed a price optimization model</li>
        <li>Real data from a liquour store based in the United States.</li>
    </ul>
    <img src="../assets/SMA.png" alt="Price Optimization Model">
    <br>
    <hr>
    <br>
    <h1>Computer Vision</h1>
    <h3>Sign-language to speech</h3>
    <h5>School Project | Python</h5>
    <ul stlye="list-style-type:disc">
        <li>Leveraged the MediaPipe Hands package for hand detection which plots 21 3D landmarks of the hand</li>
        <li>Applied the VGG-16 convolutional neural network architecture to train the model</li>
        <li>Implemented Google Text-to-Speech to produce audio for the predicted words</li>
    </ul>
    <img src="../assets/ML.png" alt="Sign Languge to Speech">
    <br>
    <hr>
    <br>
    <h1>Hackathons / Competitions</h1>
    <h3>GovTech CodeFiesta Hackathon 2021</h3>
    <h3>Policy Aggregator</h3>
    <h5>Best Composition Prize</h5>
    <h5>Group Project | Python, Vue, JavaScript, HTML</h5>
    <ul stlye="list-style-type:disc">
        <li>Developed a policy aggregator that produces all the recent policy changes</li>
        <li>Web-scraped Wikipedia for policy changes and compiled it into a database</li>
    </ul>
    <img src="../assets/Policy_Aggregator.png" alt="Policy Aggregator">
    <br>
</div>
</template>

<style scoped>
    .content{
        text-align: left;
        margin: 0px 0px 0px 30px;
    }
    img {
        height: 300px;
        width: auto;
    }
</style>