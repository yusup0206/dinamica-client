import SectionHeader from './SectionHeader';

const Map = () => {
  const mapIframe = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4447.503309789844!2d58.32829298661527!3d37.980402249960214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7001072c5b7f21%3A0xb6d5e1760c6e4ad4!2z0KTQuNGC0L3QtdGBINC60LvRg9CxICLQlNC40L3QsNC80LjQutCwIg!5e0!3m2!1sru!2s!4v1721047791179!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;

  return (
    <section>
      <div className="container">
        <div className="w-full px-5 sm:px-10 py-10 flex flex-col gap-5">
          <SectionHeader name={'Our Location'} />
          <div className="center-map w-full h-[450px] border-2 border-primary-100 rounded-md overflow-hidden p-px">
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: mapIframe }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
