import * as React from "react";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { stringify } from 'query-string';

const LinkToRelatedProducts = (record, field) => {
    return record ? (
        <Button
            color="primary"
            component={Link}
            to={{
                pathname: '/fund',
                search: stringify({
                    page: 1,
                    perPage: 25,
                    sort: 'id',
                    order: 'DESC',
                    filter: JSON.stringify({ id: record[field] }),
                }),
            }}
        >
           {field}
        </Button>
    ) : null;
};

export default LinkToRelatedProducts;