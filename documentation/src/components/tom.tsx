import Dark from '@site/static/img/tom_dark.webp';
import Light from '@site/static/img/tom_light.webp';

function Tom() {
  return (
    <div className="flex justify-center items-center mb-5">
      <img
        alt="tom"
        className="hidden dark:block"
        height="300"
        src={Dark}
        width="300"
      />

      <img
        alt="tom"
        className="dark:hidden sm:block"
        height="300"
        src={Light}
        width="300"
      />
    </div>
  );
}

export default Tom;
