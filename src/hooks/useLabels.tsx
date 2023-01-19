import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/gitHubApi";
import { sleep } from "../helper/sleep";
import { Label } from "../issues/interfaces/label";

const getLabels = async():Promise<Label[]> => {

    await sleep(2);

    const { data } = await githubApi.get<Label[]>('/labels?per_page=100', {
        headers: {
            Authorization: null
        }
    });     
    return data;
  
}

export const useLabels = () => {

    const labelsQuery = useQuery(
        ['labels'],
        getLabels,
        {
            staleTime: (1000 * 60) * 60, // ( minutos * 60 ) 1h

            //Data confiable si se activa con staleTime
            //initialData    
            
            //Data que se muestra mientras se hace la peticion
            placeholderData : [
                {
                    id: 739777675,
                    node_id: "MDU6TGFiZWw3Mzk3Nzc2NzU=",
                    url: "https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API",
                    name: "Component: Component API",
                    color: "d4c5f9",
                    default: false,             
                },
                {
                    id: 180616330,
                    node_id: "MDU6TGFiZWwxODA2MTYzMzA=",
                    url: "https://api.github.com/repos/facebook/react/labels/Component:%20Optimizing%20Compiler",
                    name: "Component: Optimizing Compiler",
                    color: "bfdadc",
                    default: false,                   
                }
            ]
        }
    );

    return labelsQuery;
    
     
}