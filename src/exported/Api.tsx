import IconApiFill0Wght100Grad0Opsz48 from '../components/ApiFill0Wght100Grad0Opsz48'
import IconApiFill0Wght200Grad0Opsz48 from '../components/ApiFill0Wght200Grad0Opsz48'
import IconApiFill0Wght300Grad0Opsz48 from '../components/ApiFill0Wght300Grad0Opsz48'
import IconApiFill0Wght400Grad0Opsz48 from '../components/ApiFill0Wght400Grad0Opsz48'
import IconApiFill0Wght500Grad0Opsz48 from '../components/ApiFill0Wght500Grad0Opsz48'
import IconApiFill0Wght600Grad0Opsz48 from '../components/ApiFill0Wght600Grad0Opsz48'
import IconApiFill0Wght700Grad0Opsz48 from '../components/ApiFill0Wght700Grad0Opsz48'
import IconApiFill1Wght100Grad0Opsz48 from '../components/ApiFill1Wght100Grad0Opsz48'
import IconApiFill1Wght200Grad0Opsz48 from '../components/ApiFill1Wght200Grad0Opsz48'
import IconApiFill1Wght300Grad0Opsz48 from '../components/ApiFill1Wght300Grad0Opsz48'
import IconApiFill1Wght400Grad0Opsz48 from '../components/ApiFill1Wght400Grad0Opsz48'
import IconApiFill1Wght500Grad0Opsz48 from '../components/ApiFill1Wght500Grad0Opsz48'
import IconApiFill1Wght600Grad0Opsz48 from '../components/ApiFill1Wght600Grad0Opsz48'
import IconApiFill1Wght700Grad0Opsz48 from '../components/ApiFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconApi = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconApiFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconApiFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconApiFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconApiFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconApiFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconApiFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconApiFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconApiFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconApiFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconApiFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconApiFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconApiFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconApiFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconApiFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
