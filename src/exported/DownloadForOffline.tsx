import IconDownloadForOfflineFill0Wght100Grad0Opsz48 from '../components/DownloadForOfflineFill0Wght100Grad0Opsz48'
import IconDownloadForOfflineFill0Wght200Grad0Opsz48 from '../components/DownloadForOfflineFill0Wght200Grad0Opsz48'
import IconDownloadForOfflineFill0Wght300Grad0Opsz48 from '../components/DownloadForOfflineFill0Wght300Grad0Opsz48'
import IconDownloadForOfflineFill0Wght400Grad0Opsz48 from '../components/DownloadForOfflineFill0Wght400Grad0Opsz48'
import IconDownloadForOfflineFill0Wght500Grad0Opsz48 from '../components/DownloadForOfflineFill0Wght500Grad0Opsz48'
import IconDownloadForOfflineFill0Wght600Grad0Opsz48 from '../components/DownloadForOfflineFill0Wght600Grad0Opsz48'
import IconDownloadForOfflineFill0Wght700Grad0Opsz48 from '../components/DownloadForOfflineFill0Wght700Grad0Opsz48'
import IconDownloadForOfflineFill1Wght100Grad0Opsz48 from '../components/DownloadForOfflineFill1Wght100Grad0Opsz48'
import IconDownloadForOfflineFill1Wght200Grad0Opsz48 from '../components/DownloadForOfflineFill1Wght200Grad0Opsz48'
import IconDownloadForOfflineFill1Wght300Grad0Opsz48 from '../components/DownloadForOfflineFill1Wght300Grad0Opsz48'
import IconDownloadForOfflineFill1Wght400Grad0Opsz48 from '../components/DownloadForOfflineFill1Wght400Grad0Opsz48'
import IconDownloadForOfflineFill1Wght500Grad0Opsz48 from '../components/DownloadForOfflineFill1Wght500Grad0Opsz48'
import IconDownloadForOfflineFill1Wght600Grad0Opsz48 from '../components/DownloadForOfflineFill1Wght600Grad0Opsz48'
import IconDownloadForOfflineFill1Wght700Grad0Opsz48 from '../components/DownloadForOfflineFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDownloadForOffline = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDownloadForOfflineFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDownloadForOfflineFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDownloadForOfflineFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDownloadForOfflineFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDownloadForOfflineFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDownloadForOfflineFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDownloadForOfflineFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDownloadForOfflineFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDownloadForOfflineFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDownloadForOfflineFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDownloadForOfflineFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDownloadForOfflineFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDownloadForOfflineFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDownloadForOfflineFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
