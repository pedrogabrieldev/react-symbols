import IconNewLabelFill0Wght100Grad0Opsz48 from '../components/NewLabelFill0Wght100Grad0Opsz48'
import IconNewLabelFill0Wght200Grad0Opsz48 from '../components/NewLabelFill0Wght200Grad0Opsz48'
import IconNewLabelFill0Wght300Grad0Opsz48 from '../components/NewLabelFill0Wght300Grad0Opsz48'
import IconNewLabelFill0Wght400Grad0Opsz48 from '../components/NewLabelFill0Wght400Grad0Opsz48'
import IconNewLabelFill0Wght500Grad0Opsz48 from '../components/NewLabelFill0Wght500Grad0Opsz48'
import IconNewLabelFill0Wght600Grad0Opsz48 from '../components/NewLabelFill0Wght600Grad0Opsz48'
import IconNewLabelFill0Wght700Grad0Opsz48 from '../components/NewLabelFill0Wght700Grad0Opsz48'
import IconNewLabelFill1Wght100Grad0Opsz48 from '../components/NewLabelFill1Wght100Grad0Opsz48'
import IconNewLabelFill1Wght200Grad0Opsz48 from '../components/NewLabelFill1Wght200Grad0Opsz48'
import IconNewLabelFill1Wght300Grad0Opsz48 from '../components/NewLabelFill1Wght300Grad0Opsz48'
import IconNewLabelFill1Wght400Grad0Opsz48 from '../components/NewLabelFill1Wght400Grad0Opsz48'
import IconNewLabelFill1Wght500Grad0Opsz48 from '../components/NewLabelFill1Wght500Grad0Opsz48'
import IconNewLabelFill1Wght600Grad0Opsz48 from '../components/NewLabelFill1Wght600Grad0Opsz48'
import IconNewLabelFill1Wght700Grad0Opsz48 from '../components/NewLabelFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNewLabel = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNewLabelFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNewLabelFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNewLabelFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNewLabelFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNewLabelFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNewLabelFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNewLabelFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNewLabelFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNewLabelFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNewLabelFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNewLabelFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNewLabelFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNewLabelFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNewLabelFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
