import Container from "@/app/componnent/Container";
import ArtistCard from "@/app/componnent/site/ArtistCard";

const Artists = () => {
    return (
        <div className="pt-[115px]">
            <Container>
                <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center justify-center">
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />

                </div>
            </Container>
        </div>
    )
}

export default Artists;
















