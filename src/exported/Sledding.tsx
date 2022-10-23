import IconSleddingFill0Wght100Grad0Opsz48 from '../components/SleddingFill0Wght100Grad0Opsz48'
import IconSleddingFill0Wght200Grad0Opsz48 from '../components/SleddingFill0Wght200Grad0Opsz48'
import IconSleddingFill0Wght300Grad0Opsz48 from '../components/SleddingFill0Wght300Grad0Opsz48'
import IconSleddingFill0Wght400Grad0Opsz48 from '../components/SleddingFill0Wght400Grad0Opsz48'
import IconSleddingFill0Wght500Grad0Opsz48 from '../components/SleddingFill0Wght500Grad0Opsz48'
import IconSleddingFill0Wght600Grad0Opsz48 from '../components/SleddingFill0Wght600Grad0Opsz48'
import IconSleddingFill0Wght700Grad0Opsz48 from '../components/SleddingFill0Wght700Grad0Opsz48'
import IconSleddingFill1Wght100Grad0Opsz48 from '../components/SleddingFill1Wght100Grad0Opsz48'
import IconSleddingFill1Wght200Grad0Opsz48 from '../components/SleddingFill1Wght200Grad0Opsz48'
import IconSleddingFill1Wght300Grad0Opsz48 from '../components/SleddingFill1Wght300Grad0Opsz48'
import IconSleddingFill1Wght400Grad0Opsz48 from '../components/SleddingFill1Wght400Grad0Opsz48'
import IconSleddingFill1Wght500Grad0Opsz48 from '../components/SleddingFill1Wght500Grad0Opsz48'
import IconSleddingFill1Wght600Grad0Opsz48 from '../components/SleddingFill1Wght600Grad0Opsz48'
import IconSleddingFill1Wght700Grad0Opsz48 from '../components/SleddingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSledding = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSleddingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSleddingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSleddingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSleddingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSleddingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSleddingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSleddingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSleddingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSleddingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSleddingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSleddingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSleddingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSleddingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSleddingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
