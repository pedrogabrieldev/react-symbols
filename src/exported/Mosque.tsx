import IconMosqueFill0Wght100Grad0Opsz48 from '../components/MosqueFill0Wght100Grad0Opsz48'
import IconMosqueFill0Wght200Grad0Opsz48 from '../components/MosqueFill0Wght200Grad0Opsz48'
import IconMosqueFill0Wght300Grad0Opsz48 from '../components/MosqueFill0Wght300Grad0Opsz48'
import IconMosqueFill0Wght400Grad0Opsz48 from '../components/MosqueFill0Wght400Grad0Opsz48'
import IconMosqueFill0Wght500Grad0Opsz48 from '../components/MosqueFill0Wght500Grad0Opsz48'
import IconMosqueFill0Wght600Grad0Opsz48 from '../components/MosqueFill0Wght600Grad0Opsz48'
import IconMosqueFill0Wght700Grad0Opsz48 from '../components/MosqueFill0Wght700Grad0Opsz48'
import IconMosqueFill1Wght100Grad0Opsz48 from '../components/MosqueFill1Wght100Grad0Opsz48'
import IconMosqueFill1Wght200Grad0Opsz48 from '../components/MosqueFill1Wght200Grad0Opsz48'
import IconMosqueFill1Wght300Grad0Opsz48 from '../components/MosqueFill1Wght300Grad0Opsz48'
import IconMosqueFill1Wght400Grad0Opsz48 from '../components/MosqueFill1Wght400Grad0Opsz48'
import IconMosqueFill1Wght500Grad0Opsz48 from '../components/MosqueFill1Wght500Grad0Opsz48'
import IconMosqueFill1Wght600Grad0Opsz48 from '../components/MosqueFill1Wght600Grad0Opsz48'
import IconMosqueFill1Wght700Grad0Opsz48 from '../components/MosqueFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMosque = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMosqueFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMosqueFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMosqueFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMosqueFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMosqueFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMosqueFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMosqueFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMosqueFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMosqueFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMosqueFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMosqueFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMosqueFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMosqueFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMosqueFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
