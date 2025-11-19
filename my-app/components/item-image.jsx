import Image from "next/image"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "./ui/item"




export function ItemImage({user}) {
  return (
    <div className="flex w-full max-w-md text-black flex-col gap-6 mx-auto mt-5 overflow-y-hidden">
      <ItemGroup className="gap-4 ">
        {user.links.length == 0 ? <span className="text-center">You Have No Links Listed</span> : user.links.map((link) => (
          <Item key={link.title} variant="outline" asChild role="listitem">
            <a   href={link.url.startsWith("http") ? link.url : `https://${link.url}`}
  target="_blank"
  rel="noopener noreferrer"
 >
              <ItemMedia variant="image">
                <img
                  src={`https://avatar.vercel.sh/${link.title}`}
                  alt={link.title}
                  width={32}
                  height={32}
                  className="object-cover grayscale"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className=" text-[3vw] md:text-sm font-sm  break-words whitespace-pre-line">
                  {link.title} -{" "}
                  {/* <span className="text-muted-foreground">{link.url}</span> */}
                </ItemTitle>
                <ItemDescription>{link.url}</ItemDescription>
              </ItemContent>
              <ItemContent className="flex-none text-center">
              </ItemContent>
            </a>
          </Item>
        ))}
      </ItemGroup>
     
    </div>
  )
}
