import { test, expect } from '@playwright/test';

test('API Renaissance basic functionality testing', async () => {
    const response = await fetch('https://cote-renaissance-be-develop.azurewebsites.net/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                {
                    brasseries {
                        nodes {
                            brasserieFields {
                                amenities {
                                    wifi
                                }
                            }
                        }
                    }
                }
            `
        })
    });
    const responseBody = await response.json();


    //console.log(responseBody.data.brasseries.nodes[0].brasserieFields.amenities.wifi);
    expect(responseBody.data.brasseries.nodes[0].brasserieFields.amenities.wifi).toBe(true);
    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(200);


});