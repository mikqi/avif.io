import React, { useEffect, useState } from "react";
import _ from "lodash";
import Converter from "./converter";
import Conversion from "./Conversion";
import Dropzone from "./Dropzone";
import { FileWithId, uniqueId } from "./utils";
import "./normalize.min.css";
import "./App.css";
import DownloadAllButton from "./DownloadAllButton";
import lion from "./assets/lion.jpg";
import lion2 from "./assets/lion2.avif";
import ReactCompareImage from "react-compare-image";

export default function App() {
  const [converter, setConverter] = useState<Converter>();
  const [files, setFiles] = useState<FileWithId[]>([]);
  const [convertedFiles, setConvertedFiles] = useState<File[]>([]);

  useEffect(() => {
    setConverter(new Converter());
  }, []);

  async function onFilesSelected(selectedFiles: File[]) {
    const addedFiles = await Promise.all(
      _.map(selectedFiles, async (file) => ({
        name: file.name,
        data: await file.arrayBuffer(),
        id: uniqueId(),
      }))
    );

    setFiles([...files, ...addedFiles]);
  }

  function onConversionFinished(file: File) {
    convertedFiles.push(file);
    setConvertedFiles([...convertedFiles]);
  }

  return (
    <div>
      <div className="header">
        <a href="#whatisavif">what is avif?</a>
        <a>blog (coming soon)</a>
        <a href="https://www.patreon.com/avifio">upcoming features</a>
        <a href="https://www.patreon.com/avifio" className="blue">
          donate
        </a>
      </div>
      <div className={"app-container"}>
        <div className={"title f3 blue bold s2"}>avif.io</div>
        <h1 className={"f1 secondary"}>Convert any image to avif for free.</h1>
        <h2 className={"f1 secondary s4"}>fast, simple, secure</h2>

        <div className={"main-container"}>
          {files.map((f) => (
            <Conversion
              onFinished={onConversionFinished}
              file={f}
              converter={converter}
              key={f.id}
            />
          ))}
          <DownloadAllButton files={convertedFiles} />
          <Dropzone onDrop={onFilesSelected} />
        </div>
        <div className="chevron"></div>
      </div>

      <div className="section" id="whatisavif">
        <div className="f3 blue bold f2 s2 center">What is avif?</div>
        <div className="f1 secondary s4 center">and why you should care</div>
        <div className="flex-center">
          <div className="explanation-text">
            <div className="f2 primary bold s2">
              avif is the image format of the future
            </div>
            <div className="f1 secondary s2">
              <a
                className="secondary"
                href="https://httparchive.org/reports/page-weight?start=earliest&end=latest&view=list#bytesImg"
                title="image size"
              >
                In the last 10 years, the size of an average website has
                increased from 500kb to 2000kb. Images have always been taking
                up half the amount. To counteract the increasing size, the web
                is in need of a new alternative to JPEG.
              </a>
            </div>
            <div className="f1 secondary s2">
              AV1 (.avif) is the solution. It is developed by the Alliance for
              Open Media in collaboration with Google, Mozilla, Intel and other
              tech giants. Avif is a codec for super-compressed images with
              acceptable quality. Avif is in continous development with the goal
              to achieve the best ratio of compression and quality.
            </div>
            <div className="f1 secondary">
              Avif offers significant reduction of file size compared to the
              current JPEG or WebP codec. You can typically reduce file sizes by
              20-90%. Even for images with transparency or animated frames.
              While currently only supported by Chrome, you can expect it to get
              more support quickly.
              <a title="avif support progress" href="https://caniuse.com/avif">
                View the progress.
              </a>
            </div>
          </div>
          <div className="explanation-image" id="comparison-img">
            <ReactCompareImage
              leftImage={lion2}
              rightImage={lion}
              leftImageAlt="after"
              rightImageAlt="before"
              sliderLineWidth={8}
              handle={<div className="handle"></div>}
              sliderLineColor="#F5F5F5"
              sliderPositionPercentage={0.5}
            />
            <div className="comparison-sub">
              <div>jpg · 75kb</div>
              <div>
                avif · <span className="blue">50kb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" id="supportedbyplayers">
        <div className="f3 blue bold f2 s2 center">Supported by players</div>
        <div className="f1 secondary s4 center">
          giants develop it - royalty-free
        </div>
        <div className="flex-center">
          <div className="explanation-text">
            <div className="f2 primary bold s2">
              avif is developed and used by the most influencial tech companies
            </div>
            <div className="f1 secondary s2">
              <a
                className="secondary"
                title="netflix is using avif"
                href="https://netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4"
              >
                Netflix has already considered .avif superior to the JPEG, PNG,
                and even the newer WebP image formats for its image quality to
                compressed file size ratio.
              </a>
            </div>
            <div className="f1 secondary s2">
              <a
                className="secondary"
                title="innovators"
                href="http://aomedia.org/membership/members/"
              >
                Leaders and technology innovators from all prominent companies
                contributed to the creation of AV1, and license their patents
                essential to the codec on a royalty-free basis to create an
                enduring ecosystem.
              </a>
            </div>
            <div className="f1 secondary">
              No other codec looks as promising as avif. With its huge support,
              its modern feature rate, the license free usage and the best
              compression rate ever achieved, we are just a step away from
              innovating the modern web.
            </div>
          </div>
          <div className="explanation-image" id="tech-companies"></div>
        </div>
      </div>
      <div className="section" id="gainanadvantage">
        <div className="f3 blue bold f2 s2 center">Gain an advantage</div>
        <div className="f1 secondary s4 center">
          why low file size is awesome for your users
        </div>
        <div className="flex-center">
          <div className="explanation-text">
            <div className="f2 primary bold s2">
              increasing your speed increases your profit
            </div>
            <div className="f1 secondary s2">
              <a
                className="secondary"
                href="https://lawsofux.com/doherty-threshold.html"
                title="user experience page speed"
              >
                Productivity soars when a computer and its users interact at a
                pace under 400ms that ensures that neither has to wait on the
                other.
              </a>
            </div>
            <div className="f1 secondary s2">
              Every successful e-commerce store focuses on increasing page
              loading speed. If your page takes too long to load, visitors will
              more likely switch to another page, quit the shopping process or
              stop visiting your website at all.
            </div>
            <div className="f1 secondary">
              So not only does a long page loading time decrease the user
              experience drastically, it also denies profit and decreases your
              SEO. You can check the slider below to find out several case
              studies on how performance increases revenue.
            </div>
          </div>
          <div className="explanation-image" id="chart-img"></div>
        </div>
      </div>
      <div className="section" id="speed">
        <div className="carousel">
          <a
            className="slide center"
            href="http://radar.oreilly.com/2008/08/radar-theme-web-ops.html"
          >
            <div className="primary s1 bold">Amazon</div>
            <div className="secondary">
              Found that every 100ms of latency cost them 1% in sales.
            </div>
          </a>
          <a
            className="slide center"
            href="https://blog.mozilla.org/metrics/category/website-optimization/"
          >
            <div className="primary s1 bold">Mozilla</div>
            <div className="secondary">
              Mozilla cut load time by 2.2 seconds and saw download conversions
              increase by 15.4%
            </div>
          </a>
          <a
            className="slide center"
            href="http://cdn.oreillystatic.com/en/assets/1/event/7/Improving%20Netflix%20Performance%20Presentation.pdf"
          >
            <div className="primary s1 bold">Netflix</div>
            <div className="secondary">
              Netflix saw a 43% decrease in their bandwidth bill after turning
              on GZip.
            </div>
          </a>
          <a
            className="slide center"
            href="https://www.slideshare.net/devonauerswald/walmart-pagespeedslide"
          >
            <div className="primary s1 bold">Walmart</div>
            <div className="secondary">
              For every 1 second of improvement, they experienced up to a 2%
              increase in conversions.
            </div>
          </a>
          <a
            className="slide center"
            href="https://www.akamai.com/de/de/about/events/edgeworld.jsp#edge2016futureofcommercemodal"
          >
            <div className="primary s1 bold">AliExpress</div>
            <div className="secondary">
              Reduced load time by 36% and saw a 10.5% increase in orders and a
              27% increase in conversion for new customers.
            </div>
          </a>
          <a
            className="slide center"
            href="https://jobs.zalando.com/de/tech/blog/loading-time-matters/index.html"
          >
            <div className="primary s1 bold">Zalando</div>
            <div className="secondary">
              Zalando saw a 0.7% increase in revenue when they shaved 100ms off
              their load time.
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
