
import { FC } from 'react';
import { useLabels } from '../../hooks/useLabels';
import { LoadingIcon } from "../../shared/components/LoadingIcon";

interface Props  {
  selectedLabels : string[]
  onChange : (labelName: string) => void
}

export const LabelPicker: FC<Props> = ( { selectedLabels, onChange } ) => {

  const labelsQuery = useLabels();

  // !por qué isLoading y no es isFecthing
  // isLoading : cuando se está cargando la data por pimera vez y no hay nada de de data en el cahche
  // isFecthing: cuando ya existe información de la data y se quiere refrescar
  if( labelsQuery.isLoading ) return (<LoadingIcon />) 

  return (
    <div>

      {
        labelsQuery.data?.map( label => (
          <span  
              key={ label.id }
              className={`badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name) ? 'label-active' : ''}`}
              style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
              onClick = { () => onChange(label.name) }
          >
              { label.name }
          </span>
        ))
      }
        
    </div>
  )
}
