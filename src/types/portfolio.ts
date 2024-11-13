export interface IPort {
  fields: {
    judul: string;
    desc: string;
    service: string;
    picture: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
