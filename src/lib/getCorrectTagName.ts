export function getCorrectTagName(type: string): string {
  const correctTagName = {
    paragraph: function () {
      return 'p';
    },
    heading_1: function () {
      return 'h1';
    },
    heading_2: function () {
      return 'h2';
    },
    heading_3: function () {
      return 'h3';
    },
    bulleted_list_item: function () {
      return 'li';
    },
    numbered_list_item: function () {
      return 'li';
    },
  };
  return correctTagName[type]();
}