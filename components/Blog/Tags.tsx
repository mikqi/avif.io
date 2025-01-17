import _ from "lodash";

export interface TagsProps {
  tags: string[];
}

export default function Tags(props: TagsProps) {
  let tags = props.tags.map((original) => {
    original = original.replace(/\s+/g, "+").toLowerCase();
    let short = original.replace(/\/$/, "");
    original = `https://google.com/search?q=site%3Aavif.io+${original}`;
    short = short.replace(/\+/g, " ");
    return { original, short };
  });
  tags = _.sortBy(tags, (s) => s.short);

  const listTags = tags.map((source: any) => (
    <li
      key={source.original}
      className="inline-block p-1 m-1 text-red-700 rounded-md text-tiny bg-red-1000"
    >
      <a target="_blank" rel="noreferrer" href={source.original}>
        {source.short}
      </a>
    </li>
  ));

  return (
    <div className="tags_container f0">
      <div className="tags_wrapper">{listTags}</div>
    </div>
  );
}
