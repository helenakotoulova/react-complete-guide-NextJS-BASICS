// our-domain.com/news/something-important

// for extracting dynamic parameters values
import {useRouter} from 'next/router';

function DetailsPage() {
    const router = useRouter(); // je to object, ktery ma urcita data a methods (napriklad query method).
    const newsId = router.query.newsId;

    // send a request to the backend API to fetch the news data with newsId

    return <h1>The Details Page</h1>
}

export default DetailsPage;