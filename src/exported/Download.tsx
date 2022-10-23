import IconDownloadFill0Wght100Grad0Opsz48 from '../components/DownloadFill0Wght100Grad0Opsz48'
import IconDownloadFill0Wght200Grad0Opsz48 from '../components/DownloadFill0Wght200Grad0Opsz48'
import IconDownloadFill0Wght300Grad0Opsz48 from '../components/DownloadFill0Wght300Grad0Opsz48'
import IconDownloadFill0Wght400Grad0Opsz48 from '../components/DownloadFill0Wght400Grad0Opsz48'
import IconDownloadFill0Wght500Grad0Opsz48 from '../components/DownloadFill0Wght500Grad0Opsz48'
import IconDownloadFill0Wght600Grad0Opsz48 from '../components/DownloadFill0Wght600Grad0Opsz48'
import IconDownloadFill0Wght700Grad0Opsz48 from '../components/DownloadFill0Wght700Grad0Opsz48'
import IconDownloadFill1Wght100Grad0Opsz48 from '../components/DownloadFill1Wght100Grad0Opsz48'
import IconDownloadFill1Wght200Grad0Opsz48 from '../components/DownloadFill1Wght200Grad0Opsz48'
import IconDownloadFill1Wght300Grad0Opsz48 from '../components/DownloadFill1Wght300Grad0Opsz48'
import IconDownloadFill1Wght400Grad0Opsz48 from '../components/DownloadFill1Wght400Grad0Opsz48'
import IconDownloadFill1Wght500Grad0Opsz48 from '../components/DownloadFill1Wght500Grad0Opsz48'
import IconDownloadFill1Wght600Grad0Opsz48 from '../components/DownloadFill1Wght600Grad0Opsz48'
import IconDownloadFill1Wght700Grad0Opsz48 from '../components/DownloadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDownload = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDownloadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDownloadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDownloadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDownloadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDownloadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDownloadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDownloadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDownloadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDownloadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDownloadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDownloadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDownloadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDownloadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDownloadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
